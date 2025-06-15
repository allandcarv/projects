import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('should have a title', () => {
    render(<App />);

    const title = screen.getByRole('heading', {
      level: 1,
      name: 'Vite + React',
    });

    expect(title).toBeInTheDocument();
  });

  it('should increment count on button click', async () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toBeInTheDocument();

    // Initial count should be 0
    expect(button).toHaveTextContent('count is 0');

    // Click the button to increment count
    await userEvent.click(button);
    expect(button).toHaveTextContent('count is 1');

    // Click again to increment count
    await userEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });
});
