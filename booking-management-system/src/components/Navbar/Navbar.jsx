import React from 'react'
import { Search } from './Search/Search'

export function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Admin</span>
                <Search />
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" for="flexSwitchCheckChecked">Mode</label>
                </div>
            </div>
        </nav>
    )
}