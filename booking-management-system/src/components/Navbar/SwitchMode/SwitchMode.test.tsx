import { render, screen } from '@testing-library/react';
import { SwitchMode } from './SwitchMode';

describe('Test layout', () => {
  beforeEach(() => {
    render(<SwitchMode />);
  });

  it('have some information', () => {
    const search = screen.getByRole('switch');
    expect(search).toBeInTheDocument();
  });
});
