import React, { Component, useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./Navbar.css";
import { Button, PageButton } from "./Button";
import { Auth } from "aws-amplify";

function NavBar({ signOut }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch(() => setUser(null));
  }, []);
  return (
    <div className="nav-bar">
      <a
        target="_blank"
        href="https://www.ingabosyndicate.org/"
        className="nav-logo"
      >
        <img src={require("./images/logo.png")} alt="logo" />
      </a>
      <ul className="nav-tabs">
        <a href="https://www.ingabosyndicate.org/" className="nav-btn">
          <li>
            <Link to="/home">Dashboard</Link>
          </li>
        </a>
        <a href="" className="nav-btn">
          <li>
            <Link to="/input">Insert record</Link>
          </li>
        </a>
        <a href="https://www.shop.ingabosyndicate.org/" className="nav-btn">
          <li>Shop</li>
        </a>
      </ul>

      {user ? (
        <div className="logout-btn-container">
          <Button onClick={signOut}>Logout</Button>
        </div>
      ):
      <div className="logout-btn-container">
          &nbsp;
        </div>
      }
    </div>
  );
}

export default NavBar;