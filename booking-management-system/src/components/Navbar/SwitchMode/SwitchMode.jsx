import React from 'react'

export function SwitchMode() {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            <label className="form-check-label" for="flexSwitchCheckChecked">Mode</label>
        </div>
    )
}