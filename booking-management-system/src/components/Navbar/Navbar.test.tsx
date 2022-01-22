import React from 'react';
import { create } from 'react-test-renderer';

import { Navbar } from './Navbar';

const props = {
  mode: 'light'
};

describe('Test layout', () => {
  test('test render mode theme', () => {
    const root = create(<Navbar mode={undefined} />).root;

    const element = root.findByType('nav');

    expect(element.props.className.includes(`navbar navbar-${props.mode} bg-${props.mode}`)).toBe(
      true
    );
  });
});
