import React from "react";
import Modal from "react-bootstrap/Modal";
import OrganizationForm from "./OrganizationForm";

type Props = {
  show: boolean;
  updateData: any;
  selected?: any;
  formUpdate: boolean;
  handleClose: () => void;
  closeHandler: () => void;
  organizationHandler: (organization: any) => Promise<void>;
  organizationupdateHandler: (organization: any) => Promise<void>;
};

const OrganizationModal: React.FC<Props> = ({
  show,
  updateData,
  formUpdate,
  handleClose,
  closeHandler,
  organizationHandler,
  organizationupdateHandler,
  selected,
}) => {
  console.log(formUpdate);
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
          formUpdate={formUpdate}
          updateData={updateData}
          organizationList={selected}
        />
      </Modal.Body>
    </Modal>
  );
};

export default OrganizationModal;
