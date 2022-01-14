import React from 'react'
import { Search } from './Search/Search'
import { SwitchMode } from './SwitchMode/SwitchMode'

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeModeContext'

export const Navbar = () => {
    const context = useContext(ThemeContext)

    return (
        <nav className={`navbar navbar-${context.theme} bg-${context.theme}`}>
            <div className="container">
                <span className="col-6 navbar-brand mb-0 h1">ADMINISTRATOR</span>
                <Search />
                <SwitchMode />
            </div>
        </nav>
    )
}