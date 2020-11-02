import React from "react";
import {render, screen} from "@testing-library/react";
import {HeaderComponent} from "../HeaderComponent";

const expectedHeader = "mock header"
const expectedTestID = "mock-test-id"

test('renders without crashing', () => {
    render(<HeaderComponent Title={expectedHeader} TestID={expectedTestID} />);
});

test('render matches snapshot', () => {
    const tree = render(<HeaderComponent Title={expectedHeader} TestID={expectedTestID} />);
    expect(tree).toMatchSnapshot();
});

test( 'renders with expected title', async() => {
    render(<HeaderComponent Title={expectedHeader} TestID={expectedTestID} />);
    const header = await screen.findByText(expectedHeader);
    expect(header).toBeTruthy();
});

test( 'renders with expected test ID', async() => {
    render(<HeaderComponent Title={expectedHeader} TestID={expectedTestID} />);
    const header = await screen.findByTestId(expectedTestID);
    expect(header).toBeTruthy();
});