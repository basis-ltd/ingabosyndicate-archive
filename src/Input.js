import React, { Component, useState, useMemo, useEffect } from "react";
import './Input.css';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import IngaboCreateForm from './ui-components/IngaboCreateForm';
import { Helmet } from "react-helmet";
import { Button } from './Button';
import { Amplify } from 'aws-amplify/';
import { useHistory, Redirect, Link } from 'react-router-dom';

Amplify.configure(awsconfig);

function Input() {

    let history = useHistory();

    const [sucess, setSucess] = useState(false);

    const toggleModal = async () => { 
        setSucess(!sucess);
    }

    const handleCancel= (e) => {
        e.preventDefault();
        history.push('/');
    }
    
    return (

        <>
            {sucess && (
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">

                <h1 className="text-xl font-medium">
                Are you sure you want to delete this record?
                        </h1>
                        
                        <div className="modal-delete-cta">
                <Button
                  className="insert-confirmation-continue"
                  onClick={toggleModal}
                >
                  Continue
                </Button>
                                <Button
                                    className="insert-confirmation-reset"
                                >
                <Link to='/'>Return to Dashboard</Link>
                </Button>
              </div>
                        
                </div>
                    </div> 
                    </div>
            )        
            }
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
                    onCancel={handleCancel}
                />
            </div>
        </>
    )

}

export default withAuthenticator(Input);