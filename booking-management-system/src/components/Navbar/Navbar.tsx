import { Search } from './Search/Search';
import { SwitchMode } from './SwitchMode/SwitchMode';

import { ThemeContext } from '../../contexts/ThemeModeContext';
import { useContext } from 'react';

export const Navbar = () => {
  const context = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-${context.theme} bg-${context.theme}`}>
      <div className="container">
        <span className="col-6 navbar-brand mb-0 h1">ADMINISTRATOR</span>
        <Search />
        <SwitchMode />
      </div>
    </nav>
  );
};
