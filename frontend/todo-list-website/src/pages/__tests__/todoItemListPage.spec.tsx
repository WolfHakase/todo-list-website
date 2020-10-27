import {render, screen} from '@testing-library/react';
import {TodoItemListPage} from '../todoItemListPage';
import React from 'react';

test('renders without crashing', () => {
    render(<TodoItemListPage/>);
});

test('renders header', async () => {
    // todo change to actual page title
    render(<TodoItemListPage/>);
    const expected_header = 'Todo header here'
    const header = await screen.findByText(expected_header)
    expect(header).toBeTruthy();
})

test('renders create button', async () => {
    render(<TodoItemListPage/>);
    const expected_button_content = "this is a button"
    const id = 'navigate-to-create-page-button'
    const button = await screen.findByTestId(id)
    expect(button.textContent).toBe(expected_button_content);
})
