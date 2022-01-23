import { useState, createContext, useEffect } from 'react';
import { FC } from 'react';

import PropTypes from 'prop-types';

type CreateContext = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<CreateContext>({
  theme: '',
  toggleTheme: () => {}
});

export interface Theme {
  children: string;
}

const ThemeProvider: FC<Theme> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#18191a';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.string.isRequired
};

export { ThemeProvider, ThemeContext };
