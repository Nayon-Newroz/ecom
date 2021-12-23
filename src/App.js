import Navigation from "./pages/Navigation";
import "./App.css";
import Container from "@mui/material/Container";
import { CartContextProvider } from "./context/CartContext";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";

function App() {
  return (
    // <Container maxWidth="xl" style={{ padding: 0 }}>
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
    // </Container>
  );
}

export default App;
