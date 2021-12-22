import Navigation from "./pages/Navigation";
import "./App.css";
import Container from "@mui/material/Container";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <CartContextProvider>
        <Navigation />
      </CartContextProvider>
    </Container>
  );
}

export default App;
