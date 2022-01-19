import React, { useEffect } from 'react';
import { useBookInfo } from '../../../utils/hooks/hooks';
import { fetchInfos } from '../../../reducer/bookingContent/actions';

import api from '../../../api/index';

import style from './BookingInfos.module.css';


export const BookingInfos = () => {

  const [state, dispatch] = useBookInfo();

  //Retrieve Booking infos category
  const retrieveInfos = async () => {
    const response = await api.get('/bookingInfos');
    return response.data;
  };

  useEffect(() => {
    const getRoomCategory = async () => {
      const allRoom = await retrieveInfos();
      if (allRoom) {
        dispatch(fetchInfos(allRoom));
      }
    };
    getRoomCategory();
  }, []);

  console.log(state)

  const { byId, allIds } = state;

  const renderBookingInfos = allIds.map((id: Number, index) => {
    
    return (
      <div className="col-4 mb-3" key={index}>
        <div className={`card ${style.cardHeight}`}>
          <img
            src="../../../../public/images/deluxe-king-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Name: {byId[id].name}</h5>
            <p className={`card-text mb-0 ${style.emailHeight}`}>Email: {byId[id].email}</p>
            <p className="card-text mb-0">Phone: {byId[id].phone}</p>
            <small className="text-muted">Check-in: {byId[id].checkIn}</small>
            <p className="card-text">
                <small className="text-muted">Check-out: {byId[id].checkOut}</small>
            </p>
            <p className="card-text mb-0">Total Price: {byId[id].totalPrice}</p>
            <p className="card-text mb-0">Total Room: {byId[id].roomNumber}</p>
            <p className="card-text">
                <small className="text-muted">Room Category: {byId[id].roomName}</small>
            </p>
            <div className='d-flex justify-content-between'>
              <a href="#" className="btn btn-outline-primary col-5">
                Edit
              </a>
              <a href="#" className="btn btn-outline-danger col-5">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  
  return (
    <div className={`row mt-5 ${style.color} ${style.heightContent}`}>
      {renderBookingInfos}
    </div>
  );
};
