import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "./AppBar";
import CartItems from "./CartItems";
import Product from "./Product";
import Message from "./Message";
import Checkout from "./Checkout";

const Navigation = () => {
  return (
    <Router>
      <div style={{ minHeight: "64px", background: "#1976d2" }}>
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <AppBar />
        </Container>
      </div>

      <div>
        <Switch>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/cart">
            <CartItems />
          </Route>

          <Route exact path="/">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
