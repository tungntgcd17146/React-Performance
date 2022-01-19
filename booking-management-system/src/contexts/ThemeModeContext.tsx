import { useState, createContext, useEffect } from 'react';

type ThemeContext = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContext>({
  theme: '',
  toggleTheme: () => {}
});

const ThemeProvider = ({ children }) => {
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

  return <ThemeContext.Provider value={value}>
            {children}
          </ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
