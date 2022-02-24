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

    expect(screen.getByTestId('errorboundary')).toBeVisible();
  });
});
