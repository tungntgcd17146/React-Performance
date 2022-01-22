import { MutableRefObject, useContext, useRef } from 'react';
import { ThemeContext } from '../../../contexts/ThemeModeContext';

import { useRoom } from '../../../utils/hooks/hooks';
import { addRoom } from '../../../reducer/rooms/actions';

import api from '../../../api/index.js';

type PostRoom = {
  id: number;
  roomImage: string;
  roomName: string;
  totalRoom: string;
  price: string;
};

export const CreateRooms = () => {
  const context = useContext(ThemeContext);

  const [state, dispatch] = useRoom();

  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const availableRef = useRef() as MutableRefObject<HTMLInputElement>;
  const imageRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSubmit = async () => {
    const postRoom: PostRoom = {
      id: state.allIds.length + 1,
      roomImage: imageRef.current.value,
      roomName: nameRef.current.value,
      totalRoom: availableRef.current.value,
      price: priceRef.current.value
    };
    if (
      nameRef.current.value != '' &&
      priceRef.current.value != '' &&
      availableRef.current.value != ''
    ) {
      dispatch(addRoom(postRoom));
      await api.post('/roomCategory', postRoom);

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
        <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
          Room type:
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
        <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
          Price for 1 night:
        </label>
        <div className="input-group">
          <input
            ref={priceRef}
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Example: 70$..."
            required
          />
          <span className="input-group-text" id="basic-addon2">
            $
          </span>
        </div>
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
          Room available:
        </label>
        <input
          ref={availableRef}
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="number: 5-20"
          required
        />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>
          Room image:
        </label>
        <input
          ref={imageRef}
          type="file"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
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
