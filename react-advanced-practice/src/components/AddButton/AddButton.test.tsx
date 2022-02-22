/* eslint-disable no-undef */
import React from 'react';
import AddButton from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Button test', () => {
  test('Should render the right button and the click', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<AddButton addRoom={onClick} />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
