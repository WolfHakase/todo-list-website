import React from "react";
import { Button } from '@material-ui/core'

interface ButtonProps {
    OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    Content: string,
    // Icon: string, //todo
    TestID: string,
}

export function PositiveButtonComponent(Props: ButtonProps) {
    // todo: styling
    return <Button data-testid={Props.TestID} onClick={Props.OnClick}>{Props.Content}</Button>;
}
