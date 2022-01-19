import { Modal } from "react-bootstrap";

export const InfoModal = () => {
    return (
      <div className="col-3">
        <label className="form-label ">Email address</label>
        <select className="form-select" aria-label="Default select example">
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    );
  };