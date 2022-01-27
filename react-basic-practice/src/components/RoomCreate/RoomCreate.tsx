import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ModalCreate } from './ModalCreate';

export const RoomCreate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Create new room
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalCreate />
        </Modal.Body>
      </Modal>
    </>
  );
};
