import React from 'react'
import { Search } from './Search/Search'
import { SwitchMode } from './SwitchMode/SwitchMode'

export function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <span className="col-6 navbar-brand mb-0 h1">Administrator</span>
                <Search />
                <SwitchMode />
            </div>
        </nav>
    )
}