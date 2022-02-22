/* eslint-disable no-undef */
import React from 'react';
import InputSearch from './index';
import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

describe('Input search test', () => {
  test('Should render the right input search and the onChange', () => {
    const setSearch = jest.fn();

    const { queryByPlaceholderText } = render(<InputSearch setInputSearch={setSearch} />);

    const searchInput = queryByPlaceholderText('Search by room name');
    // expect(queryByLabelText(<FaSearch />)).toBeTruthy;
    fireEvent.change(searchInput, { target: { value: 'testing' } });

    expect(searchInput.value).toBe('testing');
  });
});
