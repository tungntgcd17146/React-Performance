import React from 'react';
import { create } from 'react-test-renderer';

import { Navbar } from './Navbar';

const props = {
  mode: 'light'
};

describe('Test layout', () => {
  test('test render mode theme', () => {
    const root = create(<Navbar mode={`${props.mode}`} />).root;

    const element = root.findByType('nav');

    expect(element.props.className.includes('navbar')).toBe(true);
  });
});
