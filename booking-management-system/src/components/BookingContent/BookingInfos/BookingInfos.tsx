import React, { useEffect } from 'react';
import { useBookInfo } from '../../../contexts/BookingInfosContext';
import { fetchInfos, deleteInfo } from '../../../reducer/bookingContent/actions';

import api from '../../../api/index';

import style from './BookingInfos.module.css';

export const BookingInfos = () => {
  const { stateInfo, dispatchInfo } = useBookInfo();

  //Retrieve Booking infos category
  const retrieveInfos = async () => {
    const response = await api.get('/bookingInfos');
    return response.data;
  };

  //Delete room category
  const deleteInfoBooking = async (id: number) => {
    if (window.confirm('You sure to delete?')) {
      dispatchInfo(deleteInfo({ id }));
      await api.delete(`/bookingInfos/${id}`);
    }
  };

  useEffect(() => {
    const getRoomCategory = async () => {
      const allInfos = await retrieveInfos();
      if (allInfos) {
        dispatchInfo(fetchInfos({ infos: allInfos }));
      }
    };
    getRoomCategory();
  }, []);

  const { byIdInfo, allIdsInfo } = stateInfo;

  return (
    <div className={`row mt-5 ${style.color} ${style.heightContent}`}>
      {allIdsInfo.map((id: number) => {
        return (
          <div className="col-4 mb-3" key={id}>
            <div className={`card ${style.cardHeight}`}>
              <img
                src="../../../../public/images/deluxe-king-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">
                  {byIdInfo[id].roomName}
                </h5>
                <h5 className="card-title">Name: {byIdInfo[id].name}</h5>
                <p className={`card-text mb-0 ${style.emailHeight}`}>Email: {byIdInfo[id].email}</p>
                <p className="card-text mb-0">Phone: {byIdInfo[id].phone}</p>
                <small className="text-muted">Check-in: {byIdInfo[id].checkIn}</small>
                <p className="card-text">
                  <small className="text-muted">Check-out: {byIdInfo[id].checkOut}</small>
                </p>
                <p className="card-text mb-0">Total Price: {byIdInfo[id].totalPrice} $</p>
                <p className="card-text mb-0">Total Room: {byIdInfo[id].roomNumber}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Room Price/1 night: {byIdInfo[id].nightPrice}$
                  </small>
                </p>
                <div className="d-flex justify-content-end">
                  {/* <a href="#" className="btn btn-outline-primary col-5">
                    Edit
                  </a> */}
                  <a
                    onClick={() => deleteInfoBooking(id)}
                    href="#"
                    className="btn btn-outline-danger col-5">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
