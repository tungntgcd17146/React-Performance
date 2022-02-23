/* eslint-disable no-undef */
import React from 'react';
import ErrorBoundary from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Error Boundary', () => {
  test('Error Boundary', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };

    render(
      <ErrorBoundary error={'error'}>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('errorboundary')).toBe('Something went wrong!');
  });
});
