import React, { Component } from 'react'
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import './Navbar.css';
import { Button, PageButton } from './Button'

function NavBar({ signOut, user }) {
    
    return (
        <div className="nav-bar">
            <a href="https://www.ingabosyndicate.org/" className="nav-logo">
                Ingabo Syndicate
            </a>
            <ul className="nav-tabs">
                <a href="https://www.ingabosyndicate.org/" className="nav-btn"><li>Home</li></a>
                <a href="" className="nav-btn"><li>Insert record</li></a>
                <a href="https://www.shop.ingabosyndicate.org/" className="nav-btn"><li>Shop</li></a>
            </ul>

            <div className="logout-btn-container">

                <Button onClick={signOut}>Logout</Button>
                
            </div>

        </div>

    )

}

export default withAuthenticator(NavBar);

