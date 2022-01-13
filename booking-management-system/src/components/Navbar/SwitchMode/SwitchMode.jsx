import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ModeContext'

export function SwitchMode() {
    const context = useContext(ThemeContext)

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={context.toggleTheme} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Theme Mode</label>
        </div>
    )
}