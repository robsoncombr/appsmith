import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import debounce from "lodash/debounce";
import { Listing } from "./Listing";
import { Toaster, Variant } from "components/ads";
import { HighlightText, MenuItemProps } from "design-system";
import { PageHeader } from "./PageHeader";
import { BottomSpace } from "pages/Settings/components";
import { AclWrapper, AppsmithIcon } from "./components";
import uniqueId from "lodash/uniqueId";
import { adminSettingsCategoryUrl } from "RouteBuilder";
import { SettingCategories } from "@appsmith/pages/AdminSettings/config/types";
import { RoleAddEdit } from "./RoleAddEdit";
import { useDispatch, useSelector } from "react-redux";
import { ReduxActionTypes } from "@appsmith/constants/ReduxActionConstants";
import {
  cloneRole,
  deleteRole,
  getRoleById,
} from "@appsmith/actions/aclActions";
import {
  ADD_ROLE,
  CLONE_ROLE,
  COPY_OF_GROUP,
  createMessage,
  DELETE_ROLE,
  EDIT_ROLE,
  GROUP_CLONED,
  GROUP_DELETED,
  SEARCH_ROLES_PLACEHOLDER,
} from "@appsmith/constants/messages";
import {
  getAclIsLoading,
  getRoles,
  getSelectedRole,
} from "@appsmith/selectors/aclSelectors";

const CellContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

type RoleProps = {
  isEditing: boolean;
  isDeleting: boolean;
  permissionName: string;
  isAppsmithProvided: boolean;
  id: string;
  isNew?: boolean;
};

export function RolesListing() {
  const params = useParams() as any;
  const history = useHistory();
  const dispatch = useDispatch();

  const roles = useSelector(getRoles);
  const selectedRoleProps = useSelector(getSelectedRole);
  const isLoading = useSelector(getAclIsLoading);

  const [data, setData] = useState<RoleProps[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>(null);

  const selectedRoleId = params?.selected;

  useEffect(() => {
    setData(roles);
  }, [roles]);

  useEffect(() => {
    setSelectedRole(selectedRoleProps);
  }, [selectedRoleProps]);

  useEffect(() => {
    if (isNewGroup && selectedRoleId) {
      setSelectedRole({
        id: "10102",
        isEditing: false,
        isDeleting: false,
        permissionName: "Untitled Role",
        isAppsmithProvided: false,
        isNew: true,
      });
    } else if (selectedRoleId) {
      dispatch(getRoleById({ id: selectedRoleId }));
      setIsNewGroup(false);
    } else {
      dispatch({ type: ReduxActionTypes.FETCH_ACL_ROLE });
      setIsNewGroup(false);
    }
  }, [selectedRoleId]);

  const onDeleteHandler = (id: string) => {
    dispatch(deleteRole(id));
    const updatedData = data.filter((role) => {
      return role.id !== id;
    });
    setData(updatedData);
    Toaster.show({
      text: createMessage(GROUP_DELETED),
      variant: Variant.success,
    });
  };

  const onCloneHandler = (role: RoleProps) => {
    dispatch(cloneRole(role));
    const clonedData = {
      ...role,
      id: uniqueId("pg"),
      permissionName: createMessage(COPY_OF_GROUP, role.permissionName),
      isAppsmithProvided: false,
    };
    setData([...data, clonedData]);
    Toaster.show({
      text: createMessage(GROUP_CLONED),
      variant: Variant.success,
    });
  };

  const columns = [
    {
      Header: `Roles (${data.length})`,
      accessor: "permissionName",
      Cell: function GroupCell(cellProps: any) {
        return (
          <Link
            data-testid="t--roles-cell"
            to={adminSettingsCategoryUrl({
              category: SettingCategories.ROLES_LISTING,
              selected: cellProps.cell.row.original.id,
            })}
          >
            <CellContainer>
              <HighlightText
                highlight={searchValue}
                text={cellProps.cell.row.values.permissionName}
              />
              {cellProps.cell.row.original.isAppsmithProvided && (
                <AppsmithIcon data-testid="t--appsmith-badge">A</AppsmithIcon>
              )}
            </CellContainer>
          </Link>
        );
      },
    },
  ];

  const listMenuItems: MenuItemProps[] = [
    {
      className: "clone-menu-item",
      icon: "duplicate",
      onSelect: (e: React.MouseEvent, id: string) => {
        const selectedPermission = data.find((role) => role.id === id);
        selectedPermission &&
          onCloneHandler({ ...selectedPermission, isAppsmithProvided: false });
      },
      text: createMessage(CLONE_ROLE),
      label: "clone",
    },
    {
      className: "edit-menu-item",
      icon: "edit-underline",
      onSelect: (e: React.MouseEvent, key: string) => {
        history.push(`/settings/roles/${key}`);
      },
      text: createMessage(EDIT_ROLE),
      label: "edit",
    },
    {
      label: "delete",
      className: "delete-menu-item",
      icon: "delete-blank",
      onSelect: (e: React.MouseEvent, key: string) => {
        onDeleteHandler(key);
      },
      text: createMessage(DELETE_ROLE),
    },
  ];

  const pageMenuItems: MenuItemProps[] = [
    {
      icon: "book-line",
      className: "documentation-page-menu-item",
      onSelect: () => {
        /*console.log("hello onSelect")*/
      },
      text: "Documentation",
    },
  ];

  const onAddButtonClick = () => {
    setIsNewGroup(true);
    history.push(`/settings/roles/10102`);
  };

  const onSearch = debounce((search: string) => {
    if (search && search.trim().length > 0) {
      setSearchValue(search);
      const results =
        roles &&
        roles.filter((role) =>
          role.permissionName?.toLocaleUpperCase().includes(search),
        );
      setData(results);
    } else {
      setSearchValue("");
      setData(roles);
    }
  }, 300);

  return (
    <AclWrapper data-testid="t--roles-listing-wrapper">
      {selectedRoleId && selectedRole ? (
        <RoleAddEdit
          isLoading={isLoading}
          onClone={onCloneHandler}
          onDelete={onDeleteHandler}
          selected={selectedRole}
        />
      ) : (
        <>
          <PageHeader
            buttonText={createMessage(ADD_ROLE)}
            onButtonClick={onAddButtonClick}
            onSearch={onSearch}
            pageMenuItems={pageMenuItems}
            searchPlaceholder={createMessage(SEARCH_ROLES_PLACEHOLDER)}
          />
          <Listing
            columns={columns}
            data={data}
            isLoading={isLoading}
            keyAccessor="id"
            listMenuItems={listMenuItems}
          />
        </>
      )}
      <BottomSpace />
    </AclWrapper>
  );
}
