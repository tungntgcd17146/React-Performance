import React from 'react'

export function CreateRooms() {
    return (
        <form className="row mt-3">
            <div className="col-12 mb-3">
                <label for="exampleFormControlInput1" className="form-label ">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-12 mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-12 mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-6">
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </div>
        </form>
    )
}