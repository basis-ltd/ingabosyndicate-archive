import logo from './logo.svg';
import React, { useRef } from 'react'
import './App.css';
import Table from './Table'
import { Amplify, API, graphqlOperation } from 'aws-amplify/';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Button } from './Button'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IngaboCreateForm from './ui-components/IngaboCreateForm';
import IngaboUpdateForm from './ui-components/IngaboUpdateForm';
import NavBar from './NavBar';
import { Helmet } from "react-helmet";
import Modal from './Update.js'
import { Ingabo } from './models';

Amplify.configure(awsconfig);;


function App() {


  return (
    <Router>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Ingabo Syndicate Database</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="App">
        <div className="content">
          <NavBar />


          <Switch>
            <Route exact path="/">
              <div className="min-h-screen bg-gray-100 text-gray-900">
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                  <div className=""></div>
                  <div className="mt-4">
                    <Table />
                  </div>
                </main>
              </div>
            </Route>

            <div className="input-container">

              <Route path="/input">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Ingabo Syndicate Database</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
              <IngaboCreateForm
                onSuccess={() => {
                  console.log("Data saved successfully");
                }}
                />
              </Route>
              
              <Route path="/update">
                <IngaboUpdateForm
                  
                onSuccess={() => {
                  console.log("Data saved successfully");
                }}
              />
            </Route>

            </div>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);