import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import Table from "./Table";
import { Amplify } from "aws-amplify/";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "./Button";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import IngaboCreateForm from "./ui-components/IngaboCreateForm";
import IngaboUpdateForm from "./ui-components/IngaboUpdateForm";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import Input from "./Input.js";
import { Ingabo } from "./models";
import LandingPage from './Landing-Page'
import Footer from './Footer'

Amplify.configure(awsconfig);

function App() {

  let navigate = useNavigate();

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/home"
          element={
            <div className="min-h-screen bg-gray-100 text-gray-900">
              <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="mt-4">
                  <Table />
                </div>
              </main>
            </div>
          }
        />
        <Route
          path="/input"
          element={
            <div className="input-container">
              <Input />
            </div>
          }
        />
        <Route path="/" element={
          <LandingPage />
        } />

        <Route
          path="/update"
          element={
            <IngaboUpdateForm
              onSuccess={() => {
                navigate("/");
              }}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
