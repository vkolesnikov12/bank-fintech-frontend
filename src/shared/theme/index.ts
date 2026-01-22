import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E4C5E", // основной банковский синий
    },
    secondary: {
      main: "#F5A623", // акцент (оранжевый из макета)
    },
    background: {
      default: "#F6F8FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#6B7280",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
});
