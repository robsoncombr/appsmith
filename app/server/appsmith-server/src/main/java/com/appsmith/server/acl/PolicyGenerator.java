package com.appsmith.server.acl;

import com.appsmith.server.acl.ce.PolicyGeneratorCE;
import org.jgrapht.graph.DefaultEdge;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Set;
import java.util.stream.Collectors;

import static com.appsmith.server.acl.AclPermission.ADD_USERS_TO_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.ASSIGN_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.CREATE_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.CREATE_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.DELETE_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.DELETE_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.MANAGE_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.MANAGE_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.READ_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.READ_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.REMOVE_USERS_FROM_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_ADD_USER_TO_ALL_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_ASSIGN_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_DELETE_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_DELETE_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_MANAGE_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_MANAGE_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_READ_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_READ_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_REMOVE_USER_FROM_ALL_USER_GROUPS;
import static com.appsmith.server.acl.AclPermission.TENANT_UNASSIGN_PERMISSION_GROUPS;
import static com.appsmith.server.acl.AclPermission.UNASSIGN_PERMISSION_GROUPS;

import static com.appsmith.server.acl.AclPermission.MANAGE_WORKSPACES;


@Component
public class PolicyGenerator extends PolicyGeneratorCE {

    @Override
    @PostConstruct
    public void createPolicyGraph() {
        super.createPolicyGraph();
        createEnvironmentPolicyGraph();
        createTenantPolicyGraph();
        createAuditLogPolicyGraph();
        createUserGroupPolicies();
    }

    protected void createEnvironmentPolicyGraph() {
        hierarchyGraph.addEdge(MANAGE_WORKSPACES, AclPermission.MANAGE_ENVIRONMENTS);
        hierarchyGraph.addEdge(AclPermission.MANAGE_ENVIRONMENTS, AclPermission.MANAGE_ENVIRONMENT_VARIABLES);
        hierarchyGraph.addEdge(AclPermission.CREATE_ENVIRONMENTS, AclPermission.CREATE_ENVIRONMENT_VARIABLES);
        hierarchyGraph.addEdge(AclPermission.READ_ENVIRONMENTS, AclPermission.READ_ENVIRONMENT_VARIABLES);
        hierarchyGraph.addEdge(AclPermission.DELETE_ENVIRONMENTS, AclPermission.DELETE_ENVIRONMENT_VARIABLES);

        lateralGraph.addEdge(AclPermission.MANAGE_ENVIRONMENTS, AclPermission.READ_ENVIRONMENTS);
        lateralGraph.addEdge(AclPermission.MANAGE_ENVIRONMENTS, AclPermission.CREATE_ENVIRONMENTS);
        lateralGraph.addEdge(AclPermission.MANAGE_ENVIRONMENTS, AclPermission.EXECUTE_ENVIRONMENTS);
        lateralGraph.addEdge(AclPermission.READ_ENVIRONMENTS, AclPermission.EXECUTE_ENVIRONMENTS);

        lateralGraph.addEdge(AclPermission.MANAGE_ENVIRONMENT_VARIABLES, AclPermission.READ_ENVIRONMENT_VARIABLES);
        lateralGraph.addEdge(AclPermission.MANAGE_ENVIRONMENT_VARIABLES, AclPermission.CREATE_ENVIRONMENT_VARIABLES);
        lateralGraph.addEdge(AclPermission.CREATE_ENVIRONMENT_VARIABLES, AclPermission.READ_ENVIRONMENT_VARIABLES );
        lateralGraph.addEdge(AclPermission.MANAGE_ENVIRONMENT_VARIABLES, AclPermission.DELETE_ENVIRONMENT_VARIABLES);
    }

    private void createTenantPolicyGraph() {
        // If given create, we must give all the other permissions for all permission groups
        lateralGraph.addEdge(CREATE_PERMISSION_GROUPS, TENANT_MANAGE_PERMISSION_GROUPS);
        lateralGraph.addEdge(CREATE_PERMISSION_GROUPS, TENANT_READ_PERMISSION_GROUPS);
        lateralGraph.addEdge(CREATE_PERMISSION_GROUPS, TENANT_DELETE_PERMISSION_GROUPS);
        lateralGraph.addEdge(CREATE_PERMISSION_GROUPS, TENANT_ASSIGN_PERMISSION_GROUPS);
        lateralGraph.addEdge(CREATE_PERMISSION_GROUPS, TENANT_UNASSIGN_PERMISSION_GROUPS);

        // If given create, we must give all the other permissions for all user groups
        lateralGraph.addEdge(CREATE_USER_GROUPS, TENANT_MANAGE_USER_GROUPS);
        lateralGraph.addEdge(CREATE_USER_GROUPS, TENANT_READ_USER_GROUPS);
        lateralGraph.addEdge(CREATE_USER_GROUPS, TENANT_DELETE_USER_GROUPS);
        lateralGraph.addEdge(CREATE_USER_GROUPS, TENANT_ADD_USER_TO_ALL_USER_GROUPS);
        lateralGraph.addEdge(CREATE_USER_GROUPS, TENANT_REMOVE_USER_FROM_ALL_USER_GROUPS);

        // Given edit, we must give view
        lateralGraph.addEdge(TENANT_MANAGE_PERMISSION_GROUPS, TENANT_READ_PERMISSION_GROUPS);
        lateralGraph.addEdge(TENANT_MANAGE_USER_GROUPS, TENANT_READ_USER_GROUPS);
    }

    private void createAuditLogPolicyGraph() {
        hierarchyGraph.addEdge(AclPermission.READ_TENANT_AUDIT_LOGS, AclPermission.READ_AUDIT_LOGS);
    }

    @Override
    protected void createPermissionGroupPolicyGraph() {
        super.createPermissionGroupPolicyGraph();
        hierarchyGraph.addEdge(TENANT_MANAGE_PERMISSION_GROUPS, MANAGE_PERMISSION_GROUPS);
        hierarchyGraph.addEdge(TENANT_READ_PERMISSION_GROUPS, READ_PERMISSION_GROUPS);
        hierarchyGraph.addEdge(TENANT_DELETE_PERMISSION_GROUPS, DELETE_PERMISSION_GROUPS);
        hierarchyGraph.addEdge(TENANT_ASSIGN_PERMISSION_GROUPS, ASSIGN_PERMISSION_GROUPS);
        hierarchyGraph.addEdge(TENANT_UNASSIGN_PERMISSION_GROUPS, UNASSIGN_PERMISSION_GROUPS);
    }

    private void createUserGroupPolicies() {
        hierarchyGraph.addEdge(TENANT_MANAGE_USER_GROUPS, MANAGE_USER_GROUPS);
        hierarchyGraph.addEdge(TENANT_READ_USER_GROUPS, READ_USER_GROUPS);
        hierarchyGraph.addEdge(TENANT_DELETE_USER_GROUPS, DELETE_USER_GROUPS);
        hierarchyGraph.addEdge(TENANT_ADD_USER_TO_ALL_USER_GROUPS, ADD_USERS_TO_USER_GROUPS);
        hierarchyGraph.addEdge(TENANT_REMOVE_USER_FROM_ALL_USER_GROUPS, REMOVE_USERS_FROM_USER_GROUPS);

        lateralGraph.addEdge(MANAGE_USER_GROUPS, ADD_USERS_TO_USER_GROUPS);
        lateralGraph.addEdge(MANAGE_USER_GROUPS, REMOVE_USERS_FROM_USER_GROUPS);
        lateralGraph.addEdge(MANAGE_USER_GROUPS, READ_USER_GROUPS);
        lateralGraph.addEdge(ADD_USERS_TO_USER_GROUPS, READ_USER_GROUPS);
        lateralGraph.addEdge(REMOVE_USERS_FROM_USER_GROUPS, READ_USER_GROUPS);
    }

    public Set<AclPermission> getLateralPermissions(AclPermission permission, Set<AclPermission> interestingPermissions) {
        Set<DefaultEdge> lateralEdges = lateralGraph.outgoingEdgesOf(permission);
        return lateralEdges.stream()
                .map(lateralGraph::getEdgeTarget)
                .filter(interestingPermissions::contains)
                .collect(Collectors.toSet());

    }

    public Set<AclPermission> getHierarchicalPermissions(AclPermission permission, Set<AclPermission> interestingPermissions) {
        Set<DefaultEdge> hierarchicalEdges = hierarchyGraph.outgoingEdgesOf(permission);
        return hierarchicalEdges.stream()
                .map(hierarchyGraph::getEdgeTarget)
                .filter(interestingPermissions::contains)
                .collect(Collectors.toSet());
    }
}
