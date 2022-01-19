import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeModeContext';

type context = {
  theme: string;
  toggleTheme: () => void;
};

export const SwitchMode = () => {
  const context: context = useContext(ThemeContext);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onChange={context.toggleTheme}
      />
      <label
        className="form-check-label"
        htmlFor="flexSwitchCheckChecked"
      >{`${context.theme.toUpperCase()} MODE`}</label>
    </div>
  );
};
