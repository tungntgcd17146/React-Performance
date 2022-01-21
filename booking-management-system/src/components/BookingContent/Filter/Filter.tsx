import React, { useState, useRef, MutableRefObject } from 'react';
import { useBookInfo } from '../../../utils/hooks/hooks';
import { filterPrice, fetchInfos } from '../../../reducer/bookingContent/actions'

import api from '../../../api/index';

export const Filter = () => {

  const [price, setPrice] = useState(0);

  const [stateInfo, dispatchInfo] = useBookInfo();
  const { byIdInfo, allIdsInfo } = stateInfo;

  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;

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
    priceRef.current.value = 0;
    setPrice(0)
  }

  const handleChange = () => {
    console.log('price rage:', priceRef.current.value)
    setPrice(priceRef.current.value)
    dispatchInfo(filterPrice(priceRef.current.value))

    console.log(stateInfo)
  }

  // console.log('price rage:', priceRef.current)

  return (
    <>
    <div className="col-3">
      <label className="form-label ">Email address</label>
      <select className="form-select" aria-label="Default select example">
        <option value="0">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col-6">
      <label htmlFor="customRange2" className="form-label">
        Min price range: {price}$
      </label>
      <div className='row'>
        <input 
        ref={priceRef}
        onChange={handleChange}
        type="range" 
        className="form-range col-9" 
        min="0" max="1000" 
        id="customRange2" />
      </div>
    </div>
    <div className='col-3'>
    <button
          onClick={handleReset}
          type="submit"
          className="btn btn-outline-success w-100 "
        >
          Reset Filter
    </button>
    </div>
    </>
  );
};
