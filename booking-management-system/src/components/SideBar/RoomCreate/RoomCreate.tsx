import { MutableRefObject, useContext, useRef } from 'react';
import { ThemeContext } from '../../../contexts/ThemeModeContext';
import { v4 as uuid } from 'uuid';

import { useRoom } from '../../../contexts/RoomsContext';
import { addRoom } from '../../../reducer/rooms/actions';

import { Room } from '../../../interface/roomCategory';

import api from '../../../api/index.js';

export const CreateRooms = () => {
  const context = useContext(ThemeContext);

  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useRoom();

  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const availableRef = useRef() as MutableRefObject<HTMLInputElement>;
  const imageRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSubmit = async () => {
    const postRoom: Room = {
      id: uuid(),
      roomImage: imageRef.current.value,
      roomName: nameRef.current.value,
      totalRoom: parseInt(availableRef.current.value),
      price: parseInt(priceRef.current.value)
    };
    if (
      nameRef.current.value != '' &&
      priceRef.current.value != '' &&
      availableRef.current.value != ''
    ) {
      if (await api.post('/roomCategory', postRoom)) {
        dispatch(addRoom({ room: postRoom }));
      }

      nameRef.current.value = '';
      priceRef.current.value = '';
      availableRef.current.value = '';
      imageRef.current.value = '';

      nameRef.current.focus();
    }
  };

  return (
    <form className="row mt-3">
      <div className="col-12 mb-3">
        <label className={`form-label ${context.theme}`}>Room type:</label>
        <input
          ref={nameRef}
          type="text"
          className="form-control"
          placeholder="Example: Luxury room..."
          required
        />
      </div>
      <div className="col-12 mb-3">
        <label className={`form-label ${context.theme}`}>Price for 1 night:</label>
        <div className="input-group">
          <input
            ref={priceRef}
            type="number"
            className="form-control"
            placeholder="Example: 70$..."
            required
          />
          <span className="input-group-text" id="basic-addon2">
            $
          </span>
        </div>
      </div>
      <div className="col-12 mb-3">
        <label className={`form-label ${context.theme}`}>Room available:</label>
        <input
          ref={availableRef}
          type="number"
          className="form-control"
          placeholder="number: 5-20"
          required
        />
      </div>
      <div className="col-12 mb-3">
        <label className={`form-label ${context.theme}`}>Room image:</label>
        <input
          ref={imageRef}
          type="file"
          className="form-control"
          placeholder="iamge@example.com"
        />
      </div>
      <div className="col-12">
        <button onClick={handleSubmit} type="submit" className="btn btn-outline-success mb-3 w-50">
          Submit
        </button>
      </div>
    </form>
  );
};
