import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "./AppBar";
import CartItems from "./CartItems";
import Product from "./Product";
import Message from "./Message";
import Checkout from "./Checkout";
import Cancel from "./Cancel";
const Navigation = () => {
  let pathname = useLocation().pathname;

  return (
    <React.Fragment>
      <div
        style={{
          minHeight: "64px",
          background: "#154360",
          display:
            pathname === "/success" || pathname === "/cancel"
              ? "none"
              : "block",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <AppBar />
        </Container>
      </div>

      <div>
        <Switch>
          <Route path="/cancel">
            <Cancel />
          </Route>
          <Route path="/success">
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
    </React.Fragment>
  );
};

export default Navigation;
