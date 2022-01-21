import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../contexts/ThemeModeContext';
import { Navbar } from '../Navbar/Navbar';

it('should renderer correctly snapshot', () => {
  const tree = renderer
    .create(
        <ThemeProvider>
          <Navbar mode={undefined} />
        </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
