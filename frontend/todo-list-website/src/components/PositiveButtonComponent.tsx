import React from "react";

interface ButtonProps {
    OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    Content: string,
}

export function PositiveButtonComponent(Props: ButtonProps) {
    // todo: styling
    return <button onClick={Props.OnClick}>{Props.Content}</button>;
}
