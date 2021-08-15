import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./componants/Navbar";
import ProductList from "./componants/ProductList";
import Details from "./componants/Details";
import Cart from "./componants/Cart";
import Default from "./componants/Default";
import Modal from "./componants/Modal";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
};

export default App;
