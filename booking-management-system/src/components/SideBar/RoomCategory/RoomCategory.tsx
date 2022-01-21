import { useEffect, useState } from 'react';
import { useRoom } from '../../../utils/hooks/hooks';
import { fetchRoom, deleteRoom } from '../../../reducer/rooms/actions';

import { Modal, Button } from 'react-bootstrap';

import api from '../../../api/index.js';

import style from './RoomCategory.module.css';
import '../../../../public/images/deluxe-king-1.jpg';

export const RoomCategory = () => {
  const [state, dispatch] = useRoom();

  const { byId, allIds } = state;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Retrieve Room category
  const retrieveCategory = async () => {
    const response = await api.get('/roomCategory');
    return response.data;
  };

  //Delete room category
  const deleteCategory = async (id) => {
    if (window.confirm('You sure to delete?')) {
      dispatch(deleteRoom(id));
      await api.delete(`/roomCategory/${id}`);
      console.log(state);
    }
  };

  useEffect(() => {
    const getRoomCategory = async () => {
      const allRoom = await retrieveCategory();
      if (allRoom) {
        dispatch(fetchRoom(allRoom));
      }
    };
    getRoomCategory();
  }, []);

  // console.log('render:', state);
  const renderCategory = allIds.map((id: Number, index) => {
    return (
      <div className="card mb-3" key={index}>
        {/* to do: create new componet card */}
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="../../../../public/images/Deluxe-02.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{byId[id].roomName}</h5>
              <p className="card-text">Price: {byId[id].price}$/1 night</p>
              <p className="card-text">
                <small className="text-muted">Room available: {byId[id].totalRoom} room</small>
              </p>
              <button onClick={() => deleteCategory(id)} className="btn btn-outline-danger mb-3">
                Delete
              </button>
              <button
                onClick={handleShow}
                className={`${style.button} btn btn-outline-primary mb-3`}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-3">
      <h2>Room Category</h2>
      <div className={`mt-3 ${style.color} ${style.heightContent}`}>
        <div className="row mt-3">
          {/* <Room /> */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="row mt-3">
                <div className="col-12 mb-3">
                  <label htmlFor="exampleFormControlInput1" className={`form-label`}>
                    Room type:
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
                    Price for 1 night:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Example: 70$..."
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="exampleFormControlInput1" className={`form-label`}>
                    Room available:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="number: 5-20"
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="exampleFormControlInput1" className={`form-label`}>
                    Room image:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="col-12">
                  <button
                    onClick={handleClose}
                    type="submit"
                    className="btn btn-outline-success mb-3 w-50"
                  >
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
          {renderCategory}
        </div>
      </div>
    </div>
  );
};
