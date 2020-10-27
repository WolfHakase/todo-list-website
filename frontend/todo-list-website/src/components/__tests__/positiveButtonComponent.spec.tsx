import {render, screen} from "@testing-library/react";
import {NavigateButtonComponent} from "../../components/navigateButtonComponent";
import React from "react";

test('renders without crashing', () => {
    const expected_target = 'todo target'
    const expected_content = 'button content'
    render(<NavigateButtonComponent/>);
});

test('renders with content', async () => {
    const expected_target = 'todo target'
    const expected_content = 'button content'
    render(<NavigateButtonComponent/>);
    const actual_content = await screen.findByText(expected_content)
    expect(actual_content).toBeTruthy();
})

test('button navigates to target', async () => {
    const expected_target = 'todo target'
    const expected_content = 'button content'
    render(<NavigateButtonComponent/>);
    const button = await screen.findByText(expected_content)
    button.click()
    expect(button.textContent).toBe(expected_button_content);
})