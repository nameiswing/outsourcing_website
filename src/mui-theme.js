import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#0f7ab8",
        },
        secondary: {
            main: "#00a3d4",
        },
        error: {
            main: "#e04245",
        },
        grey: {
            1: "#f7fafc",
            50: "#eceff1",
            100: "#cfd8dc",
            200: "#b0bec5",
            300: "#90a4ae",
            400: "#78909c",
            500: "#607d8b",
            600: "#546e7a",
            700: "#455a64",
            800: "#37474f",
            900: "#263238",
            A100: "#cfd8dc",
            A200: "#b0bec5",
            A400: "#78909c",
            A700: "#455a64",
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          lg: 1024,
          xl: 1200,
        },
      },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        button: {
            textTransform: "none",
            fontWeight: "500",
        },
        body1: {
            fontSize: '.875rem',
            color: '#37474f',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '.375rem'
                }
            }
        },
    }
});
