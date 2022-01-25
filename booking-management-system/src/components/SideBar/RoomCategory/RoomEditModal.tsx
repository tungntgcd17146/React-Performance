import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeModeContext';

export const RoomEditModal = ({ handleCloseModal, roomId }) => {
  const context = useContext(ThemeContext);

  const [show, setShow] = useState(true);

  console.log('testValue:', roomId)

  const handleExit = () => {
    setShow(false);
    handleCloseModal();
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
                //ref={nameRef}
                defaultValue={123456}
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
                  //ref={priceRef}
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
                //ref={availableRef}
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
                //ref={imageRef}
                type="file"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="col-12">
              <button
                //onClick={handleSubmit}
                type="submit"
                className="btn btn-outline-success mb-3 w-50">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            //onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
