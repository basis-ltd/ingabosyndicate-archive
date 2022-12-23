import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify'
import config from './aws-exports'
import { ThemeProvider, Button, Card, createTheme } from "@aws-amplify/ui-react";

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

Amplify.configure(awsconfig);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <ThemeProvider theme={theme} >
    <App />
  </ThemeProvider>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
