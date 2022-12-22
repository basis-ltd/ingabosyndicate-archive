import React, { Component, useState, useMemo, useEffect } from 'react'
import { Button, PageButton } from './Button'
import './Update.css';
import { ThemeProvider, Card } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import IngaboUpdateForm from './ui-components/IngaboUpdateForm';
import { Amplify } from 'aws-amplify/';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components/studioTheme";
import { DataStore } from 'aws-amplify/';
import {Ingabo} from './models';

Amplify.configure(awsconfig);

export default function Modal() {

    return (
        <>
        <div className="modal">
            <div className="overlay">
              <div className="modal-content-edit">
                <IngaboUpdateForm />
                <Button onclick={async (id) => console.log(id)}>Log</Button>
              </div>
            </div>
            </div>
            
        </>
    )


}