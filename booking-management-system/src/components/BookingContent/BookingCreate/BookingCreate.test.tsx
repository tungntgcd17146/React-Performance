import React from 'react';
import { create } from 'react-test-renderer';

import { BookingCreate } from './BookingCreate';

describe('Test layout', () => {
  test('test render mode theme', () => {
    const root = create(<BookingCreate />).root;

    const element = root.findByType('input');

    expect(element.props.className.includes('form-control')).toBe(true);
  });
});
