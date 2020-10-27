import {render, screen} from "@testing-library/react";
import {PositiveButtonComponent} from "../PositiveButtonComponent";
import React from "react";

test('renders without crashing', () => {
    const handle_click = jest.fn()
    const expected_content = 'button content'
    render(<PositiveButtonComponent onClick={handle_click} content={expected_content}/>);
});

test('renders with content', async () => {
    const handle_click = jest.fn()
    const expected_content = 'button content'
    render(<PositiveButtonComponent onClick={handle_click} content={expected_content}/>);
    const actual_content = await screen.findByText(expected_content)
    expect(actual_content).toBeTruthy();
})

test('button navigates to target', async () => {
    const handle_click = jest.fn()
    const expected_content = 'button content'
    render(<PositiveButtonComponent onClick={handle_click} content={expected_content}/>);
    const button = await screen.findByText(expected_content)
    button.click()
    expect(handle_click).toHaveBeenCalledTimes(1);
})