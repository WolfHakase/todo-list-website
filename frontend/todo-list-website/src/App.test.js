import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('renders without crashing', () => {
  render(<App />);
});

test('render matches snapshot', () => {
  const tree = render(<App/>);
  expect(tree).toMatchSnapshot();
});

test('renders list page', async () => {
  render(<App />);
  const expectedHeader = 'List Page'
  const header = await screen.findByText(expectedHeader)
  expect(header).toBeTruthy();
})

test('renders create button', async () =>{
  render(<App />);
  const expected_button_content = "Create"
  const id = 'navigate-to-create-page-button'
  const button = await screen.findByTestId(id)
  expect(button.textContent).toBe(expected_button_content);
})
