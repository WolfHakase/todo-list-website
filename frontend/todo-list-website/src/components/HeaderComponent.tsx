import React from "react";

interface HeaderProps {
    Title: string,
}

export function HeaderComponent(Props: HeaderProps) {
    return <h1>{Props.Title}</h1>
}