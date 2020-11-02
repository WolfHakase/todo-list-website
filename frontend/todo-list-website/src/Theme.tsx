import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "#fff",
            "default": "#fafafa",
        },
        "primary": {
            "light": "#80e27e",
            "main": "#4caf50",
            "dark": "#087f23",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "#ff5f52",
            "main": "#c62828",
            "dark": "#8e0000",
            "contrastText": "#fff"
        },
        "action": {
            disabledBackground: "#002b00",
            active: "#4caf50"
        }
    }
})

export default theme;