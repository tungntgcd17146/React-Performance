/* eslint-disable no-undef */
import React from 'react';
import ErrorBoundary from './index';
import { render, screen } from '@testing-library/react';

describe('Error Boundary', () => {
  test('Error Boundary', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByTestId('errorboundary');

    expect(errorMessage.textContent).toBe('Something went wrong!');
  });
});
