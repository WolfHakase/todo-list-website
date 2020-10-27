import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders header', async () => {
  // todo change to actual page title
  render(<App />);
  const expected_header = 'Todo header here'
  const header = await screen.findByText(expected_header)
  expect(header).toBeTruthy();
})

test('renders create button', async () =>{
  render(<App />);
  const expected_button_content = "this is a button"
  const id = 'navigate-to-create-page-button'
  const button = await screen.findByTestId(id)
  expect(button.textContent).toBe(expected_button_content);
})
