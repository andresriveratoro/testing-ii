import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './dashboard';

describe('Dashboard', () => {
  const dashboard = render(<Dashboard />);
  const strikesButton = dashboard.getByText(/strikes/i);
  const strikesCounter = dashboard.getByTestId('strikesCounter');

  test('Increment strikes by 1', () => {
    // strike #1
    fireEvent.click(strikesButton);

    expect(strikesCounter).toHaveTextContent('1');
  });

  test('Reset strikes to 0 at 3 strikes', () => {
    // strike #2
    fireEvent.click(strikesButton);

    // strike #3
    fireEvent.click(strikesButton);

    expect(strikesCounter).toHaveTextContent('0');
  });
});