import {render, screen} from "@testing-library/react";
import {PositiveButtonComponent} from "../PositiveButtonComponent";
import React from "react";

test('renders without crashing', () => {
    const handleClick = jest.fn()
    const expectedContent = 'button content'
    render(<PositiveButtonComponent OnClick={handleClick} Content={expectedContent}/>);
});

test('renders with content', async () => {
    const handleClick = jest.fn()
    const expectedContent = 'button content'
    render(<PositiveButtonComponent OnClick={handleClick} Content={expectedContent}/>);
    const button = await screen.findByText(expectedContent)
    expect(button).toBeTruthy();
})

test('button click event works', async () => {
    const handleClick = jest.fn()
    const expectedContent = 'button content'
    render(<PositiveButtonComponent OnClick={handleClick} Content={expectedContent}/>);
    const button = await screen.findByText(expectedContent)
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1);
})