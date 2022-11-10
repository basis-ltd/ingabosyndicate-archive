import logo from './logo.svg';
import React, { useRef } from 'react'
import './App.css';
import Table from './Table'
import { Amplify, API, graphqlOperation } from 'aws-amplify/';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { Button } from './Button'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IngaboCreateForm from './ui-components/IngaboCreateForm';
import NavBar from './NavBar';
import sendMessage from './SmsApi';




function App({ signOut, user }) {


  return (
    <Router>


    <div className="App">

        <div className="content">
          <NavBar />

            <Switch>

            <Route exact path="/">
            <div className="min-h-screen bg-gray-100 text-gray-900">
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="">
                </div>
                <div className="mt-4">
                    <Table />
                </div>
                </main>
                </div>
              </Route>

              <Route path="/input">
              <sendMessage />  
              </Route>

          </Switch>
      </div>
      </div>
      
      </Router>
  );
}

export default withAuthenticator(App);