import {render, screen} from '@testing-library/react';
import {TodoItemListPage} from '../TodoItemListPage';
import React from 'react';

test('renders without crashing', () => {
    render(<TodoItemListPage/>);
});

test('renders header', async () => {
    // todo change to actual page title
    render(<TodoItemListPage/>);
    const expectedHeader = 'Todo header here'
    const header = await screen.findByText(expectedHeader)
    expect(header).toBeTruthy();
})

test('renders create button', async () => {
    render(<TodoItemListPage/>);
    const expectedButtonContent = "this is a button"
    const id = 'navigate-to-create-page-button'
    const button = await screen.findByTestId(id)
    expect(button.textContent).toBe(expectedButtonContent);
})
