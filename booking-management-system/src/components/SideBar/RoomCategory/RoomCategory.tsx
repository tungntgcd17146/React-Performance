import { useEffect } from 'react';
import { useRoom } from '../../../utils/hooks/hooks';
import { fetchRoom, deleteRoom } from '../../../reducer/rooms/actions';

import api from '../../../api/index.js';

import style from './RoomCategory.module.css';
import '../../../../public/images/deluxe-king-1.jpg';

export const RoomCategory = () => {
  const [state, dispatch] = useRoom();

  const { byId, allIds } = state;

  //Retrieve Room category
  const retrieveCategory = async () => {
    const response = await api.get('/roomCategory');
    return response.data;
  };

  //Delete room category
  const deleteCategory = async (id: string) => {
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

  return (
    <div className="mt-3">
      <h2>Room Category</h2>
      <div className={`mt-3 ${style.color} ${style.heightContent}`}>
        <div className="row mt-3">
          {allIds.map((id) => {
            return (
              <div className="card mb-3" key={id}>
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
                        <small className="text-muted">
                          Room available: {byId[id].totalRoom} room
                        </small>
                      </p>
                      <button
                        onClick={() => deleteCategory(id)}
                        className="btn btn-outline-danger mb-3">
                        Delete
                      </button>
                      {/* <button
                        onClick={handleShow}
                        className={`${style.button} btn btn-outline-primary mb-3`}>
                        Edit
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
