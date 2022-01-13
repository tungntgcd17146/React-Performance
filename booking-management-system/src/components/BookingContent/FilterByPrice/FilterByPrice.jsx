import React from 'react'

export function FilterByPrice() {
    return (
        <div className="col-6">
            <label htmlFor="customRange2" className="form-label">Example range</label>
            <input type="range" className="form-range" min="0" max="5" id="customRange2" />
        </div>
    )
}