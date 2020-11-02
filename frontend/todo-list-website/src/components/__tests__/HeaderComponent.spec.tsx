import React from "react";
import {render, screen} from "@testing-library/react";
import {HeaderComponent} from "../HeaderComponent";

const expectedHeader = "mock header"

test('renders without crashing', () => {
    render(<HeaderComponent Title={expectedHeader} />)
})

test( 'renders with expected title', async() => {
    render(<HeaderComponent Title={expectedHeader} />);
    const header = await screen.findByText(expectedHeader);
    expect(header).toBeTruthy();
})