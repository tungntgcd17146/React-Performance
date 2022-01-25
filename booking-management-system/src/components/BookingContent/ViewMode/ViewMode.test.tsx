import { render, screen } from '@testing-library/react';
import { ViewMode } from './ViewMode';

describe('Test layout', () => {
  beforeEach(() => {
    render(<ViewMode />);
  });

  it('have some information', () => {
    const search = screen.getByRole('switch');
    expect(search).toBeInTheDocument();
  });
});
