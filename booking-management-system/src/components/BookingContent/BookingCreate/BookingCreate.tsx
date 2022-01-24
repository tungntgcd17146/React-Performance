import React, { MutableRefObject, useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useBookInfo } from '../../../contexts/BookingInfosContext';
import { useRoom } from '../../../contexts/RoomsContext';

import { addInfo } from '../../../reducer/bookingContent/actions';

import { Info } from '../../../interface/bookingContent';

import api from '../../../api/index.js';

export const BookingCreate = () => {
  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const { stateInfo, dispatchInfo } = useBookInfo();

  const { state } = useRoom();
  const { byId, allIds } = state;

  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;
  const checkInRef = useRef() as MutableRefObject<HTMLInputElement>;
  const checkOutRef = useRef() as MutableRefObject<HTMLInputElement>;
  const valueRef = useRef() as MutableRefObject<HTMLSelectElement>;
  const roomNumberRef = useRef() as MutableRefObject<HTMLInputElement>;
  const totalPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const roomNameRef = useRef() as MutableRefObject<HTMLOptionElement>;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePick = () => {
    const totalDay = Math.floor(
      (new Date(checkOutRef.current.value).getTime() -
        new Date(checkInRef.current.value).getTime()) /
        (1000 * 3600 * 24)
    );
    const roomNumber = parseInt(roomNumberRef.current.value);
    const roomType = parseInt(valueRef.current.value);
    const totalPrice = totalDay * roomType * roomNumber;
    setTotalPrice(totalPrice);
  };

  const handleSubmit = async () => {
    const postInfo: Info = {
      id: stateInfo.allIdsInfo.length + 1,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      checkIn: checkInRef.current.value,
      checkOut: checkOutRef.current.value,
      nightPrice: valueRef.current.value,
      roomName: roomNameRef.current.innerText,
      roomNumber: roomNumberRef.current.value,
      totalPrice: totalPriceRef.current.value
    };
    if (
      nameRef.current.value != '' &&
      emailRef.current.value != '' &&
      phoneRef.current.value != '' &&
      checkInRef.current.value != '' &&
      checkOutRef.current.value != '' &&
      roomNumberRef.current.value != ''
    ) {
      dispatchInfo(addInfo({ info: postInfo }));
      await api.post('/bookingInfos', postInfo);

      (nameRef.current.value = ''),
        (emailRef.current.value = ''),
        (phoneRef.current.value = ''),
        (checkInRef.current.value = ''),
        (checkOutRef.current.value = ''),
        (roomNumberRef.current.value = '');

      nameRef.current.focus();
      handleClose();
    }
  };

  return (
    <>
      <Button className="col-3" variant="outline-success" onClick={handleShow}>
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
                ref={nameRef}
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
                ref={emailRef}
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
                ref={phoneRef}
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="number: 5-20"
                required
              />
            </div>
            <div className="col-6">
              <label className="form-label ">Check-in:</label>
              <input ref={checkInRef} type="date" className="form-control" required />
            </div>
            <div className="col-6">
              <label className="form-label ">Check-out:</label>
              <input ref={checkOutRef} type="date" className="form-control" required />
            </div>
            <div className="col-9 mt-3">
              <label className="form-label ">Room type:</label>
              <select
                ref={valueRef}
                onChange={handlePick}
                className="form-select"
                aria-label="Default select example">
                {allIds.map((id: number) => {
                  return (
                    <option ref={roomNameRef} key={id} value={byId[id].price}>
                      {byId[id].roomName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-3 mb-3 mt-3">
              <label htmlFor="exampleFormControlInput1" className={`form-label`}>
                Number:
              </label>
              <input
                onChange={handlePick}
                ref={roomNumberRef}
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="number: 5-20"
                required
              />
            </div>
            <div className="col-6">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-outline-success w-100">
                Submit
              </button>
            </div>
            <div className="input-group col-3 w-50">
              <span className="mt-1">Total price :</span>
              <input
                ref={totalPriceRef}
                type="number"
                className="form-control"
                value={totalPrice}
                defaultValue={0}
              />
              <span className="input-group-text" id="basic-addon2">
                $
              </span>
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
};
