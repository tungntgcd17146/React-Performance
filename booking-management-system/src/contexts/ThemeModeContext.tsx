import { useState, createContext, useEffect, ReactNode } from 'react';

type CreateContext = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<CreateContext>({
  theme: '',
  toggleTheme: () => {}
});

export type Prop = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Prop) => {
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

export { ThemeProvider, ThemeContext };
