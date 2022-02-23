/* eslint-disable no-undef */
import React from 'react';
import AddButton from './index';
import { render, fireEvent } from '@testing-library/react';

const onClick = jest.fn();
const props = { addRoom: onClick };
const component = render(<AddButton {...props} />);

describe('Add button test', () => {
  test('Should button onClick event correctly', () => {
    const button = component.getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
