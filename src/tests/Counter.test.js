// import necessary react testing library helpers here
// import the Counter component here

import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Counter from "../components/Counter"

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  expect(screen.getByRole('heading').textContent == "Counter");
});

test('should render initial count with value of 0', () => {
  expect( screen.getByTestId( "count" ) ).toHaveTextContent( '0' );
});

test('clicking + increments the count', () => {
  const curr_val = screen.getByTestId("count").textContent;
  const incr_val = curr_val+1;

  userEvent.click(screen.getByRole('button', {name: '+'}));
  expect(screen.getByTestId("count").textContent == incr_val)
});

test('clicking - decrements the count', () => {
  const curr_val = screen.getByTestId("count").textContent;
  const decr_val = curr_val-1;

  userEvent.click(screen.getByRole('button', {name: '-'}));
  expect(screen.getByTestId("count").textContent == decr_val)
});
