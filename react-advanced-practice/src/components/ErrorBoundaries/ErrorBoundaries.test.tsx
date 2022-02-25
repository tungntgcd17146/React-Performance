/* eslint-disable no-undef */
import React from 'react';
import ErrorBoundary from './index';
import { render, screen } from '@testing-library/react';

const ThrowError = () => {
  throw new Error('Test error');
};

describe('Error Boundary', () => {
  test('Error Boundary', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByTestId('errorboundary');

    expect(errorMessage.textContent).toBe('Sorry.. there was an error');
  });
});
