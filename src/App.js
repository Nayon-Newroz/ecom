import Navigation from "./pages/Navigation";
import "./App.css";
import Container from "@mui/material/Container";
import { CartContextProvider } from "./context/CartContext";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const theme = createTheme({
  // status: {
  //   danger: orange[500],
  // },
});

function App() {
  return (
    // <Container maxWidth="xl" style={{ padding: 0 }}>
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
    // </Container>
  );
}

export default App;
