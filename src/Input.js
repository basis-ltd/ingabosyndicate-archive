import React, { Component, useState, useMemo, useEffect } from "react";
import './Input.css';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import IngaboCreateForm from './ui-components/IngaboCreateForm';
import { Helmet } from "react-helmet";
import { Button } from './Button';
import { Amplify, DataStore } from 'aws-amplify/';
import { Redirect, Link, useNavigate } from 'react-router-dom';
import { Ingabo } from './models';

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
                  <div>
                  <Button
                    className="insert-confirmation-continue"
                    onClick={toggleModal}
                  >
                    Close
                  </Button>
                  <Button className="insert-confirmation-reset">
                    <Link to="/">Return to Dashboard</Link>
                  </Button>
                  </div>
                  <div>
                    <Button
                    onClick={() => {
                      console.log("Send email to user");
                    }}
                    >
                      Notify user
                    </Button>
                  </div>
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
            onSuccess={ async () => {
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