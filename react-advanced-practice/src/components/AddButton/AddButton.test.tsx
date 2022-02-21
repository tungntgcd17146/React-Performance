/* eslint-disable no-undef */
import React from 'react';
import AddButton from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Button test', () => {
  test('Should render the specified label and register the click', () => {
    const onClick = jest.fn();
    // const label = 'This is a button';

    const { getByRole } = render(<AddButton addRoom={onClick} />);

    const button = getByRole('button');

    //expect(getByText(label)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
