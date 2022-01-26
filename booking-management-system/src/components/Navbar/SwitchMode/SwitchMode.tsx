import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeModeContext';

type Context = {
  theme: string;
  toggleTheme: () => void;
};

export const SwitchMode = () => {
  const context: Context = useContext(ThemeContext);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        onChange={context.toggleTheme}
      />
      <label className="form-check-label">{`${context.theme.toUpperCase()} MODE`}</label>
    </div>
  );
};
