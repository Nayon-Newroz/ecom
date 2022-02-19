import Navigation from "./pages/Navigation";
import "./App.css";
import Container from "@mui/material/Container";
import { CartContextProvider } from "./context/CartContext";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#154360",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F5B041",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          TransitionComponent={Slide}
        >
          <CartContextProvider>
            <Navigation />
          </CartContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
