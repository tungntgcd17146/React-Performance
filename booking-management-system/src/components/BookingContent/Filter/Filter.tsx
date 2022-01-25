import React, { useState, useRef, MutableRefObject } from 'react';
import { useBookInfo } from '../../../contexts/BookingInfosContext';
import { useRoom } from '../../../contexts/RoomsContext';

//import api from '../../../api/index';

export const Filter = () => {
  const [price, setPrice] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const { stateInfo, dispatchInfo } = useBookInfo();

  const { state } = useRoom();
  const { byId, allIds } = state;

  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const roomFilterRef = useRef() as MutableRefObject<HTMLSelectElement>;

  const handleChange = () => {
    setPrice(parseInt(priceRef.current.value));
  };

  const handleRoomChange = () => {
    // dispatchInfo(filterByRoom(roomFilterRef.current.value));
  };

  return (
    <>
      <div className="col-3">
        <label className="form-label ">Filter by room category</label>
        <select
          onChange={handleRoomChange}
          ref={roomFilterRef}
          className="form-select"
          aria-label="Default select example">
          <option value="all">All</option>
          {allIds.map((id: number) => {
            return (
              <option key={id} value={byId[id].roomName}>
                {byId[id].roomName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-6">
        <label htmlFor="customRange2" className="form-label">
          Min price range: {price}$
        </label>
        <div className="row">
          <input
            ref={priceRef}
            onChange={handleChange}
            type="range"
            className="form-range col-9"
            min="0"
            max="2000"
            id="customRange2"
          />
        </div>
      </div>
      <div className="col-3 mt-4 d-flex justify-content-center form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          View Card
        </label>
      </div>
    </>
  );
};
