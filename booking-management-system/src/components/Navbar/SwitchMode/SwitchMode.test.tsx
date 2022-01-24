import React from 'react';
import { create } from 'react-test-renderer';

import { SwitchMode } from './SwitchMode';

describe('Test layout', () => {
  it('test render mode theme', () => {
    const root = create(<SwitchMode />).root;

    const element = root.findByType('input');
    expect(element.props.role.includes('switch')).toBe(true);

    const logo = root.findByType('label');
    expect(logo.props.className.includes('form-check-label')).toBe(true);
  });
});
