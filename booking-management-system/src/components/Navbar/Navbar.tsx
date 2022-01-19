import React from 'react';
import { Search } from './Search/Search';
import { SwitchMode } from './SwitchMode/SwitchMode';

export const Navbar = ({ mode }) => {
  return (
    <nav className={`navbar navbar-${mode.theme} bg-${mode.theme}`}>
      <div className="container">
        <span className="col-6 navbar-brand mb-0 h1">ADMINISTRATOR</span>
        <Search />
        <SwitchMode />
      </div>
    </nav>
  );
};
