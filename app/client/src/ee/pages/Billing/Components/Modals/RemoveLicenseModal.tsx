import {
  removeLicense,
  showRemoveLicenseModal,
} from "@appsmith/actions/tenantActions";
import {
  REMOVE_LICENSE_KEY,
  REMOVE_LICENSE_KEY_MODAL_TEXT,
  REMOVE_LICENSE_KEY_MODAL_SUBTEXT,
  CANCEL,
  CONFIRM,
  createMessage,
  LEARN_MORE,
} from "@appsmith/constants/messages";
import { isRemovingLicense } from "@appsmith/selectors/tenantSelectors";
import { DOCS_BASE_URL } from "constants/ThirdPartyConstants";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Text,
  Link,
} from "design-system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export interface RemoveLicenseModalProps {
  isRemoveModalOpen?: boolean;
}

export default function RemoveLicenseModal(props: RemoveLicenseModalProps) {
  const dispatch = useDispatch();

  const removingLicense = useSelector(isRemovingLicense);

  function removeLicenseClick(): void {
    dispatch(removeLicense());
  }
  return (
    <Modal
      onOpenChange={(open: boolean) => dispatch(showRemoveLicenseModal(open))}
      open={props.isRemoveModalOpen}
    >
      <ModalContent style={{ width: "640px" }}>
        <ModalHeader>{createMessage(REMOVE_LICENSE_KEY)}</ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <div>
              <Text
                color="var(--ads-v2-color-bg-brand-secondary)"
                kind="body-m"
              >
                {createMessage(REMOVE_LICENSE_KEY_MODAL_TEXT)}
              </Text>
            </div>
            <div>
              <Text
                color="var(--ads-v2-color-bg-brand-secondary)"
                kind="body-m"
              >
                {createMessage(REMOVE_LICENSE_KEY_MODAL_SUBTEXT)}
              </Text>
            </div>
            <div>
              <Link endIcon="share-2" to={DOCS_BASE_URL}>
                {createMessage(LEARN_MORE)}
              </Link>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                className="update-license-btn"
                kind="secondary"
                onClick={() => dispatch(showRemoveLicenseModal(false))}
                size="md"
              >
                {createMessage(CANCEL)}
              </Button>
              <Button
                className="update-license-btn"
                isLoading={removingLicense}
                kind="error"
                onClick={() => removeLicenseClick()}
                size="md"
              >
                {createMessage(CONFIRM)}
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
