import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../contexts/ThemeModeContext';

import App from '../App/App';

it('should renderer correctly snapshot', () => {
  const tree = renderer
    .create(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
