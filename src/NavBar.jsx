import React, { Component } from 'react'
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import './Input.css';

function NavBar({ signOut, user }) {
    
    return (
        <div className="nav-bar">
            <a href="" className="nav-logo">Ingabo syndicate</a>
            <ul className="nav-tabs">
                <a href="" className="nav-btn"><li>Home</li></a>
                <a href="" className="nav-btn"><li>Insert record</li></a>
                <a href="" className="nav-btn"><li>Shop</li></a>
                <button onClick={signOut} className="nav-btn nav-logout-btn"><li>Sign out</li></button>
            </ul>

        </div>

    )

}

export default withAuthenticator(NavBar);

