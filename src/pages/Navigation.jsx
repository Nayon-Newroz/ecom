import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "./AppBar";
import CartItems from "./CartItems";
import Product from "./Product";
import Message from "./Message";

const Navigation = () => {
  return (
    <Router>
      <div>
        <AppBar />
      </div>
      
      <div>
        <Switch>
          <Route path="/message">
            <Message />
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
