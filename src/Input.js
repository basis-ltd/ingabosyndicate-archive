import React, { Component, useState, useMemo, useEffect } from "react";
import "./Input.css";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import IngaboCreateForm from "./ui-components/IngaboCreateForm";
import { Helmet } from "react-helmet";
import { Button } from "./Button";
import { Amplify, DataStore } from "aws-amplify/";
import { Redirect, Link, useNavigate } from "react-router-dom";
import { Ingabo } from "./models";
import Sms77Client from "sms77-client";
import axios from "axios";

let inputName = "";
let inputReceipient = "";

let sendNotificationMessage = async (to, username) => {
  const encodedParams = new URLSearchParams();
  let receipient = "+250" + to.slice(-9);
  encodedParams.append("to", receipient);
  encodedParams.append(
    "p",
    "SqvVNLOHAkZTwsQRgaWG0CDHtdLIkCuTzJyflINHcvqvAl4ZHHkR2RkRev82hjvA"
  );
  encodedParams.append(
    "text",
    `Hello ${username}, your registration in Ingabo Syndicate Database was successful!`
  );

  const options = {
    method: "POST",
    url: "https://sms77io.p.rapidapi.com/sms",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "4c2f584f62msh583c2650cad43bdp130dbfjsn6ce4e4c945a7",
      "X-RapidAPI-Host": "sms77io.p.rapidapi.com",
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data, receipient);
    })
    .catch(function (error) {
      console.error(error);
    });
};

Amplify.configure(awsconfig);

function Input() {
  let navigate = useNavigate();

  const [sucess, setSucess] = useState(false);

  // USER TELEPHONE
  const [telephone, setTelephone] = useState("");
  // USER NAME
  const [name, setName] = useState("");

  const toggleInputModal = async (to, username) => {
    setTelephone(to);
    setName(username);
    setSucess(!sucess);
  };

  return (
    <>
      {sucess && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h1 className="text-xl font-medium">
                Your input has been recorded successfully
              </h1>

              <div className="modal-cta">
                <div className="modal-success-cta">
                  <Button
                    onClick={() => {
                      console.log(telephone, name);
                      // sendNotificationMessage(telephone, name);
                    }}
                    className="notify-user"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                        />
                      </svg>
                    </span>
                    Notify {name} via SMS
                  </Button>
                  <Button className="insert-confirmation-reset">
                    <Link to="/">Return to Dashboard</Link>
                  </Button>
                </div>
                <div className="close-btn">
                  <Button
                    className="insert-confirmation-continue"
                    onClick={toggleInputModal}
                  >
                    Close
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
          onSuccess={(fields) => {
            let number = fields.telephone;
            let fullName = fields.fullName;
            let imyumbati = fields.activity1;

            console.log("Data saved successfully", fields.activity1);
            toggleInputModal(number, fullName);
          }}
          onSubmit={(fields) => {
            console.log(fields);
          }}
          onCancel={() => {
            console.log("Data save cancelled");
            navigate("/");
          }}
          onError={(error) => {
            console.log("Data save failed", error);
          }}
        />
      </div>
    </>
  );
}

export default withAuthenticator(Input);
