import React from "react";
import {Button} from '@material-ui/core'

interface ButtonProps {
    OnClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    Content: string,
    Icon?: object,
    TestID: string,
}

export function PositiveButtonComponent(Props: ButtonProps) {
    return <Button variant="contained" color={'primary'} startIcon={Props.Icon} data-testid={Props.TestID} onClick={Props.OnClick}>
        <span className="mdc-button__label">{Props.Content}</span>
    </Button>;
}
