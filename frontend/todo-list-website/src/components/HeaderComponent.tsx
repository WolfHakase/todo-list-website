import React from "react";

interface HeaderProps {
    Title: string,
    TestID: string,
}

export function HeaderComponent(Props: HeaderProps) {
    return <h1 data-testid={Props.TestID}>{Props.Title}</h1>
}