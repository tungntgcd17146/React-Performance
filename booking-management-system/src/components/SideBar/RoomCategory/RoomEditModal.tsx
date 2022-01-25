import React, { useState, useRef, MutableRefObject } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeModeContext';
import { useRoom } from '../../../contexts/RoomsContext';
import { editRoom } from '../../../reducer/rooms/actions';
import { Room } from '@/interface/roomCategory';

import api from '../../../api/index.js';

export interface Props {
  handleCloseModal: () => void;
  selectedId: string;
}

export const RoomEditModal = ({ handleCloseModal, selectedId }: Props) => {
  const context = useContext(ThemeContext);

  const [show, setShow] = useState(true);

  const { state, dispatch } = useRoom();
  const { byId } = state;

  const nameEditRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceEditRef = useRef() as MutableRefObject<HTMLInputElement>;
  const availableEditRef = useRef() as MutableRefObject<HTMLInputElement>;
  const imageRef = useRef() as MutableRefObject<HTMLInputElement>;

  console.log('testValue:', selectedId);

  const handleExit = () => {
    setShow(false);
    handleCloseModal();
  };

  const handleUpdate = async () => {
    const roomAfterEdit: Room = {
      id: selectedId,
      roomImage: imageRef.current.value,
      roomName: nameEditRef.current.value,
      totalRoom: parseInt(availableEditRef.current.value),
      price: parseInt(priceEditRef.current.value)
    };
    handleExit();
    if (roomAfterEdit) {
      dispatch(editRoom({ room: roomAfterEdit }));
      await api.put(`/roomCategory/${selectedId}`, roomAfterEdit);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleExit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row mt-3">
            <div className="col-12 mb-3">
              <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
                Room type:
              </label>
              <input
                ref={nameEditRef}
                defaultValue={byId[selectedId].roomName}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Example: Luxury room..."
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
                Price for 1 night:
              </label>
              <div className="input-group">
                <input
                  ref={priceEditRef}
                  defaultValue={byId[selectedId].price}
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Example: 70$..."
                  required
                />
                <span className="input-group-text" id="basic-addon2">
                  $
                </span>
              </div>
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
                Room available:
              </label>
              <input
                ref={availableEditRef}
                defaultValue={byId[selectedId].totalRoom}
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="number: 5-20"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
                Room image:
              </label>
              <input
                ref={imageRef}
                type="file"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="col-12">
              <button
                onClick={handleUpdate}
                type="submit"
                className="btn btn-outline-success mb-3 w-50">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleExit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
