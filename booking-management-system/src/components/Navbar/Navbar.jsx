import React from 'react'
import { Search } from './Search/Search'
import { SwitchMode } from './SwitchMode/SwitchMode'

export function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Admin</span>
                <Search />
                <SwitchMode />
            </div>
        </nav>
    )
}