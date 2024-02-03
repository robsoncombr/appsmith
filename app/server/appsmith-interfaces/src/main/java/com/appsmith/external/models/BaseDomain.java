package com.appsmith.external.models;

import com.appsmith.external.views.Views;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.querydsl.core.annotations.QueryTransient;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * TODO :
 * Move BaseDomain back to appsmith-server.domain. This is done temporarily to create templates and providers in the same database as the server
 */
@Getter
@Setter
@ToString
@MappedSuperclass
public abstract class BaseDomain implements AppsmithDomain, Serializable {

    private static final long serialVersionUID = 7459916000501322517L;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    protected String id;

    @JsonView(Views.Internal.class)
    @CreationTimestamp
    protected Instant createdAt;

    @JsonView(Views.Internal.class)
    @UpdateTimestamp
    protected Instant updatedAt;

    @CreatedBy
    @JsonView(Views.Public.class)
    protected String createdBy;

    @LastModifiedBy
    @JsonView(Views.Public.class)
    protected String modifiedBy;

    @JsonView(Views.Public.class)
    protected Instant deletedAt = null;

    @Type(JsonBinaryType.class)
    @Column(columnDefinition = "jsonb")
    @JsonView(Views.Internal.class)
    protected Set<Policy> policies;

    @Type(JsonBinaryType.class)
    @Column(columnDefinition = "jsonb")
    @JsonView(Views.Internal.class)
    protected PolicyMap policyMap;

    @PrePersist
    @PreUpdate
    public void preUpdate() {
        setPolicyMap(PolicyMap.fromPolicies(policies));
    }

    @JsonView(Views.Public.class)
    public boolean isNew() {
        return this.getId() == null;
    }

    @QueryTransient
    @JsonView(Views.Internal.class)
    public boolean isDeleted() {
        return deletedAt != null;
    }

    @Transient
    @JsonView(Views.Public.class)
    public Set<String> userPermissions = new HashSet<>();

    // This field will only be used for git related functionality to sync the action object across different instances.
    // This field will be deprecated once we move to the new git sync implementation.
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonView(Views.Internal.class)
    String gitSyncId;

    public void sanitiseToExportDBObject() {
        this.setCreatedAt(null);
        this.setUpdatedAt(null);
        this.setUserPermissions(null);
        this.setPolicies(null);
        this.setCreatedBy(null);
        this.setModifiedBy(null);
    }

    public void makePristine() {
        // Set the ID to null for this domain object so that it is saved a new document in the database (as opposed to
        // updating an existing document). If it contains any policies, they are also reset.
        this.setId(null);
        this.setUpdatedAt(null);
        if (this.getPolicies() != null) {
            this.getPolicies().clear();
        }
    }

    /**
     * Prepares the domain for bulk write operation. It does the following:
     * 1. Populate an ID if it is not present
     * 2. Populate the createdAt and updatedAt fields as they'll not be generated by the bulk insert process
     */
    public void updateForBulkWriteOperation() {
        if (this.getId() == null) {
            // this.setId(new ObjectId().toString());
        }
        if (this.getCreatedAt() == null) {
            this.setCreatedAt(Instant.now());
        }
        this.setUpdatedAt(Instant.now());
    }
}
