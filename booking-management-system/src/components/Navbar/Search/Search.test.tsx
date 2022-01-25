import React from 'react';

import { render, screen } from '@testing-library/react';
import { Search } from './Search';

describe('Test layout', () => {
  beforeEach(() => {
    render(<Search />);
  });

  it('have some information', () => {
    const search = screen.getByPlaceholderText('Search');
    expect(search).toBeInTheDocument();
  });
});
