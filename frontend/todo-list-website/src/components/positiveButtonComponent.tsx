import React from "react";

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    content: string,
}

export function PositiveButtonComponent(Props: ButtonProps) {
    // todo: styling
    return <button onClick={Props.onClick}>{Props.content}</button>;
}
