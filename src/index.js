import React from 'react';
import { AuthModeStrategyType } from 'aws-amplify'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import { ThemeProvider, Button, Card, createTheme } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

const theme = createTheme({
  name: 'ingabosyndicate',
  tokens: {
    components: {
      button: {
        primary: {
          backgroundColor: {
            value: "#006400"
          }
        }
      }
    }
  }
})

Amplify.configure({
  ...awsconfig,
  aws_appsync_authenticationType: 'API_KEY',
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme} >
    <Router>
      <App />
    </Router>
    
  </ThemeProvider>

)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
