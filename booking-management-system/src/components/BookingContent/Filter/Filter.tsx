import React, { useState, useRef, MutableRefObject } from 'react';
import { useBookInfo, useRoom } from '../../../utils/hooks/hooks';
import { filterPrice, fetchInfos, filterByRoom } from '../../../reducer/bookingContent/actions';

import api from '../../../api/index';

export const Filter = () => {
  const [price, setPrice] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [stateInfo, dispatchInfo] = useBookInfo();

  const [state] = useRoom();
  const { byId, allIds } = state;

  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const roomFilterRef = useRef() as MutableRefObject<HTMLSelectElement>;

  //Retrieve Booking infos category
  const retrieveInfos = async () => {
    const response = await api.get('/bookingInfos');
    return response.data;
  };

  const handleReset = () => {
    const getRoomCategory = async () => {
      const allRoom = await retrieveInfos();
      if (allRoom) {
        dispatchInfo(fetchInfos(allRoom));
      }
    };
    getRoomCategory();
    priceRef.current.value = '0';
    setPrice(0);
    roomFilterRef.current.value = 'all';
  };

  const handleChange = () => {
    setPrice(parseInt(priceRef.current.value));
    dispatchInfo(filterPrice(priceRef.current.value));
  };

  const handleRoomChange = () => {
    dispatchInfo(filterByRoom(roomFilterRef.current.value));
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
      <div className="col-3 mt-4">
        <button onClick={handleReset} type="submit" className="btn btn-outline-success w-100 ">
          Reset Filter
        </button>
      </div>
    </>
  );
};
