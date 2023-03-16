import React, { useRef } from "react";
import "./App.css";
import Table from "./Table";
import { Amplify } from "aws-amplify/";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "./Button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import IngaboCreateForm from "./ui-components/IngaboCreateForm";
import IngaboUpdateForm from "./ui-components/IngaboUpdateForm";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { Ingabo } from "./models";
import LandingPage from "./Landing-Page";
import Footer from "./Footer";
import Import from "./Import.js";
import Create from "./Create.js";

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
          path="/"
          element={
            <div className="landing-page">
              <LandingPage />
            </div>
          }
        />

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
        <Route path="/import" element={<Import />} />

        <Route path="/create" element={<Create />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
