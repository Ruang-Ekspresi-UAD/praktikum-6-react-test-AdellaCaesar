import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter'; // Assuming Counter imports Display internally

describe('Counter Component', () => {
  test('renders the initial count value as 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    expect(countValue).toHaveTextContent('0');
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByText('Increment');

    // Simulate click event
    fireEvent.click(incrementButton);

    // Update the test to expect the incremented value
    expect(countValue).toHaveTextContent('1');
  });

  test('decrements count when decrement button is clicked (assuming decrement functionality is implemented)', () => {
    // Assuming decrement functionality is implemented:
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    const decrementButton = screen.getByText('Decrement');

    // Simulate click event
    fireEvent.click(decrementButton);

    // Update the test to expect the decremented value (assuming it's -1)
    expect(countValue).toHaveTextContent('-1');
  });


  test('display has correct value', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');

    // Initial value should be 0
    expect(countValue).toHaveTextContent('0');

    // Increment the count and verify the display updates correctly
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton); // Increment twice
    expect(countValue).toHaveTextContent('2');

    // Decrement the count and verify the display updates correctly
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent('1');
});

});