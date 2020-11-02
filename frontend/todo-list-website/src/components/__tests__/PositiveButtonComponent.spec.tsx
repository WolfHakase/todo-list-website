import {render, screen} from "@testing-library/react";
import {PositiveButtonComponent} from "../PositiveButtonComponent";
import React from "react";
import {AddCircle} from '@material-ui/icons';

const handleClick = jest.fn()
const expectedTestID = 'mock-test-id'
const expectedContent = 'button content'

test('renders without crashing', () => {
    render(<PositiveButtonComponent OnClick={handleClick} TestID={expectedTestID} Content={expectedContent}/>);
});

test('renders with icon without crashing', async() => {
    const expectedIcon = <AddCircle />
    render(<PositiveButtonComponent Icon={expectedIcon} OnClick={handleClick} TestID={expectedTestID} Content={expectedContent}/>)
});

test('renders with content', async () => {
    render(<PositiveButtonComponent OnClick={handleClick} TestID={expectedTestID} Content={expectedContent}/>);
    const button = await screen.findByText(expectedContent)
    expect(button).toBeTruthy();
});

test('button click event works', async () => {
    render(<PositiveButtonComponent OnClick={handleClick} TestID={expectedTestID} Content={expectedContent}/>);
    const button = await screen.findByText(expectedContent)
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1);
});