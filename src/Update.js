import React, { Component, useState, useMemo, useEffect } from 'react'
import { Button, PageButton } from './Button'
import './Update.css';
import { ThemeProvider, Card } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import IngaboUpdateForm from './ui-components/IngaboUpdateForm';
import { Amplify } from 'aws-amplify/';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components/studioTheme";

Amplify.configure(awsconfig);

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => { 
        setModal(!modal);
    }

    if (modal) {
        document.body.classList.add('active-modal');
    }
    else {
        document.body.classList.remove('active-modal');
     }
    

    return (
        <>
        
            <Button
            onClick={toggleModal}
            >
                Open
            </Button>

            {modal && (
                <div className="modal">
            <div onClick={toggleModal} className="overlay">
                <div className="modal-content">
                        <IngaboUpdateForm
                    onCancel ={toggleModal}
                        />
                </div>
                </div>
            </div>
            )}
            
        </>
    )


}