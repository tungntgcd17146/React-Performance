import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

export const BookingCreate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='col-3' variant="outline-success" onClick={handleShow}>
        Create new booking
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row mt-3">
          <div className="col-12 mb-3">
            <label htmlFor="exampleFormControlInput1" className={`form-label`}>
              Customer name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Example: Luxury room..."
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="exampleFormControlInput1" className={`form-label`}>
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Example: 70$..."
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="exampleFormControlInput1" className={`form-label`}>
              Phone number:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="number: 5-20"
              required
            />
          </div>
          <div className="col-6">
            <label className="form-label ">Check-in:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-6">
            <label className="form-label ">Check-out:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-9 mt-3">
            <label className="form-label ">Room type:</label>
            <select className="form-select" aria-label="Default select example">
              <option value="0">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-3 mb-3 mt-3">
            <label htmlFor="exampleFormControlInput1" className={`form-label`}>
              Number:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="number: 5-20"
              required
            />
          </div>
          <div className='col-6 mt-3'>
            Total price: 0$
          </div>
          <div className="col-6">
            <button onClick={handleClose} type="submit" className="btn btn-outline-success mb-3 w-100">
              Submit
            </button>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
