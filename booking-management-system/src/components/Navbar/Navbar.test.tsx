import React from 'react';
import { create } from 'react-test-renderer';

import { Navbar } from './Navbar';

describe('Test layout', () => {
  it('test render mode theme', () => {
    const root = create(<Navbar />).root;

    const element = root.findByType('nav');
    expect(element.props.className.includes('navbar')).toBe(true);

    const logo = root.findByType('span');
    expect(logo.props.className.includes('navbar-brand')).toBe(true);
  });
});
