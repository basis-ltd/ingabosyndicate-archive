import { Auth } from "aws-amplify";
import React, { Component, useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./Navbar.css";
import { Button, PageButton } from "./Button";

const logOut = async () => {
  try {
    await Auth.signOut();
    window.location.reload();
  }
  catch (error) {
    return error;
  }
}

function NavBar() {
  const navigate = useNavigate();
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
        <li>
          <a className="nav-btn">
            <Link to="/home">Dashboard</Link>
          </a>
        </li>
        <li>
          <a className="nav-btn">
            <Link to="/create">Add member</Link>
          </a>
        </li>
        <li>
        <a target="_blank" href="https://www.shop.ingabosyndicate.org/" className="nav-btn">
          Shop
        </a>
        </li>
      </ul>

      {user ? (
        <div className="logout-btn-container">
          <Button onClick={() => {
            logOut();
            navigate('/');
          }}>Logout</Button>
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