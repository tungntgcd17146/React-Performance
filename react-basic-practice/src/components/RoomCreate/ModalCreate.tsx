//import { useState } from 'react';

export const ModalCreate = () => {
  return (
    <form className="row mt-3">
      <div className="col-12 mb-3">
        <label className={`form-label`}>Room type:</label>
        <input
          //ref={nameRef}
          type="text"
          className="form-control"
          placeholder="Example: Luxury room..."
          required
        />
      </div>
      <div className="col-12 mb-3">
        <label className={`form-label`}>Price for 1 night:</label>
        <div className="input-group">
          <input
            //ref={priceRef}
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
        <label className={`form-label`}>Room available:</label>
        <input
          //ref={roomAvailableRef}
          type="number"
          className="form-control"
          placeholder="number: 5-20"
          required
        />
      </div>
      <div className="col-12 mb-3">
        <label className={`form-label`}>Room image:</label>
        <input
          //ref={imageRef}
          type="file"
          className="form-control"
          placeholder="iamge@example.com"
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-outline-success mb-3 w-50">
          Submit
        </button>
      </div>
    </form>
  );
};
