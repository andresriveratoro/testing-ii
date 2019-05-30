import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from './Display';

describe('Dashboard', () => {
  const dashboard = render(<Dashboard />);
  const strikesButton = dashboard.getByText(/strikes/i);
  const ballsButton = dashboard.getByText(/balls/i);
  // const strikesCounter = dashboard.getByTestId('strikesCounter');

  const display = render(<Display />);
  const displayStrikes = display.getByTestId('strikes');
  const displayBalls = display.getByTestId('balls');

  test('Increment strikes by 1', () => {
    // strike #1
    fireEvent.click(strikesButton);

    // expect(strikesCounter).toHaveTextContent('1');
    expect(displayStrikes).toHaveTextContent('1');
  });

  test('Reset strikes to 0 at 3 strikes', () => {
    // strike #2
    fireEvent.click(strikesButton);

    // strike #3
    fireEvent.click(strikesButton);

    // expect(strikesCounter).toHaveTextContent('0');
    expect(displayStrikes).toHaveTextContent('0');
  });

  test('Increment balls by 1', () => {
    // ball #1
    fireEvent.click(ballsButton);

    expect(displayBalls).toHaveTextContent('1');
  });

  test('Reset strikes and balls at 4 balls', () => {
    // ball #2
    fireEvent.click(ballsButton);

    // ball #3
    fireEvent.click(ballsButton);

    // ball #4
    fireEvent.click(ballsButton);

    expect(displayBalls).toHaveTextContent('0');
  });
});
