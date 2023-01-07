import React, { Component, useState, useMemo, useEffect } from "react";
import './Input.css';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import IngaboCreateForm from './ui-components/IngaboCreateForm';
import { Helmet } from "react-helmet";
import { Button } from './Button';
import { Amplify } from 'aws-amplify/';
import { Redirect, Link, useNavigate } from 'react-router-dom';

Amplify.configure(awsconfig);

function Input() {

    let navigate = useNavigate();

    const [sucess, setSucess] = useState(false);

    const toggleModal = async () => { 
        setSucess(!sucess);
    }
    
    return (
      <>
        {sucess && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                <h1 className="text-xl font-medium">
                  Your input has been recorded successfully
                </h1>

                <div className="modal-delete-cta">
                  <Button
                    className="insert-confirmation-continue"
                    onClick={toggleModal}
                  >
                    Continue
                  </Button>
                  <Button className="insert-confirmation-reset">
                    <Link to="/">Return to Dashboard</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="input-container">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Ingabo Syndicate Database</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <IngaboCreateForm
            onSuccess={() => {
              console.log("Data saved successfully");
              toggleModal();
            }}
            onCancel={() => {
              console.log("Data save cancelled");
              navigate("/");
            }}
          />
        </div>
      </>
    );

}

export default withAuthenticator(Input);