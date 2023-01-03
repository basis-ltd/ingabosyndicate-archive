import logo from './logo.svg';
import React, { useRef } from 'react'
import './App.css';
import Table from './Table'
import { Amplify } from 'aws-amplify/';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Button } from './Button'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IngaboCreateForm from './ui-components/IngaboCreateForm';
import IngaboUpdateForm from './ui-components/IngaboUpdateForm';
import NavBar from './NavBar';
import { Helmet } from "react-helmet";
import Input from './Input.js'
import { Ingabo } from './models';

Amplify.configure(awsconfig);


function App() {


  return (

    <>
    
    <NavBar />

    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/create" element={<IngaboCreateForm />} />
    </Routes>

    </>

  );
}

export default withAuthenticator(App);