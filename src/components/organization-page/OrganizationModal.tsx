import React from "react";
import Modal from "react-bootstrap/Modal";
import OrganizationForm from "./OrganizationForm";

type Props = {
  show: boolean;
  updateData: any;
  selected?: any;
  handleClose: () => void;
  closeHandler: () => void;
  organizationHandler: (organization: any) => Promise<void>;
  organizationupdateHandler: (organization: any) => Promise<void>;
};

const OrganizationModal: React.FC<Props> = ({
  show,
  updateData,
  handleClose,
  closeHandler,
  organizationHandler,
  organizationupdateHandler,
  selected,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Modal heading </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OrganizationForm
          closeHandler={closeHandler}
          organizationHandler={organizationHandler}
          organizationupdateHandler={organizationupdateHandler}
          formUpdate={true}
          updateData={updateData}
          organizationList={selected}
        />
      </Modal.Body>
    </Modal>
  );
};

export default OrganizationModal;
