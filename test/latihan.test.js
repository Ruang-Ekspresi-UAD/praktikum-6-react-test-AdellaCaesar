import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

test('Counter Default Value must be 0', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  expect(counterValue).toHaveTextContent('0');
});

test('Increment works when button clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByTestId('increment-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent('1');
});

test('Decrement works when button clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByTestId('decrement-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent('-1');
});

test('Reset the count using reset button', () => {
  render(<Counter />);
  const resetButton = screen.getByTestId('reset-button');
  const incrementButton = screen.getByTestId('increment-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(incrementButton); // Tambahkan nilai
  expect(counterValue).toHaveTextContent('1');

  fireEvent.click(resetButton);
  expect(counterValue).toHaveTextContent('0');
});

test('Greeting component with my name', () => {
  render(<Greeting name="Nama Anda" />);
  const greetingElement = screen.getByTestId('greeting');
  expect(greetingElement).toHaveTextContent('Hello, Nama Anda');
});

test('Greeting component with lecturer’s name', () => {
  render(<Greeting name="Nama Dosen Anda" />);
  const greetingElement = screen.getByTestId('greeting');
  expect(greetingElement).toHaveTextContent('Hello, Nama Dosen Anda');
});

test('Triggers alert with correct message when clicked', () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<AlertButton message="This is a test alert!" />);
  
  const alertButton = screen.getByTestId('alert-button');
  fireEvent.click(alertButton);

  expect(alertMock).toHaveBeenCalledWith('This is a test alert!');
  alertMock.mockRestore();
});
test('Counter handles large numbers correctly', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');
  
    for (let i = 0; i < 1000; i++) {
      fireEvent.click(incrementButton);
    }
  
    expect(counterValue).toHaveTextContent('1000');
});

test('Greeting component handles long or special characters in name', () => {
  render(<Greeting name="John Doe!@#$%^&*()" />);
  const greetingElement = screen.getByTestId('greeting');
  expect(greetingElement).toHaveTextContent('Hello, John Doe!@#$%^&*()');
});

test('AlertButton handles empty message', () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<AlertButton message="" />);
  
  const alertButton = screen.getByTestId('alert-button');
  fireEvent.click(alertButton);

  expect(alertMock).toHaveBeenCalledWith(''); // Pastikan alert tetap dipanggil
  alertMock.mockRestore();
});