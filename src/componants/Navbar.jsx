import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import {ButtonContainer} from './Button'

export default class navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar sticky-top navbar-dark px-sm-5">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="store" className="d-inline-block align-top" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              rakify mall
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus"></i>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(-mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`