import React from 'react'

export function CreateBooking() {
    return (
        <div className="col-3">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Create new booking
            </button>
        </div>
    )
}