/* eslint-disable no-undef */
import React from 'react';
import TotalNumber from './index';
import { render } from '@testing-library/react';

describe('Button test', () => {
  test('Should render the right button show number list', () => {
    const numberList = 5;

    const { getByRole } = render(<TotalNumber numberList={numberList} />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Total list5');
  });
});
