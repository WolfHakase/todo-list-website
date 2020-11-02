import {render, screen} from '@testing-library/react';
import {TodoItemListPage} from '../TodoItemListPage';
import React from 'react';

test('renders without crashing', () => {
    render(<TodoItemListPage/>);
});

test('render matches snapshot', () => {
    const tree = render(<TodoItemListPage/>);
    expect(tree).toMatchSnapshot();
});

test('renders header', async () => {
    render(<TodoItemListPage/>);
    const expectedHeader = 'List Page'
    const header = await screen.findByText(expectedHeader)
    expect(header).toBeTruthy();
});

test('renders create button', async () => {
    render(<TodoItemListPage/>);
    const expectedButtonContent = "Create"
    const id = 'navigate-to-create-page-button'
    const button = await screen.findByTestId(id)
    expect(button.textContent).toBe(expectedButtonContent);
});
