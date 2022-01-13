import React from 'react'

export function ViewMode() {
    return (
        <div className="col-3 form-check form-switch">
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">View</label>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
        </div>
    )
}