import { act, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render hello', () => {
    render(<App />);

    act(() => {
      jest.runAllTimers();
      expect(screen.getByText(/hello fast/i)).toBeInTheDocument();
    });
  });
});
