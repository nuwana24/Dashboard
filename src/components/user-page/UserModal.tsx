import React from "react";
import Modal from "react-bootstrap/Modal";
import UserForm from "./UserForm";

type Props = {
  show: boolean;
  updateData: any;
  selected?: any;
  formUpdate: boolean;
  handleClose: () => void;
  closeHandler: () => void;
  userHandler: (user: any) => Promise<void>;
  userupdateHandler: (user: any) => Promise<void>;
};

const UserModal: React.FC<Props> = ({
  show,
  updateData,
  formUpdate,
  handleClose,
  closeHandler,
  userHandler,
  userupdateHandler,
  selected,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserForm
          closeHandler={closeHandler}
          userHandler={userHandler}
          userupdateHandler={userupdateHandler}
          formUpdate={formUpdate}
          updateData={updateData}
          userList={selected}
        />
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
