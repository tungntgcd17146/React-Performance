/* eslint-disable no-undef */
import React from 'react';
import TotalNumber from './index';
import { render, screen } from '@testing-library/react';

describe('Button test', () => {
  test('Should render show number list button correctly', () => {
    const numberList = 5;

    render(<TotalNumber numberList={numberList} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Total list5');
  });
});
