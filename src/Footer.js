import React, { Component, useState, useMemo, useEffect } from "react";
import { Amplify, API } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Link, useNavigate } from "react-router-dom";
import './Footer.css'
Amplify.configure(awsconfig);


function Footer () {

    const navigate = useNavigate();

    return (
      <>
        <div class="footer">
          <div class="footer-links">
            <div class="footer-contact">
              <a>
                <img
                  src={require("./images/logo.png")}
                  alt=""
                  id="footer-logo"
                />
              </a>

              <div class="contact-addresses">
                <h1>Connect with us</h1>

                <ul class="social-media-icons">
                  <li>
                    <a href="#">
                      <img
                        src={require("./images/social-media-icons/email-icon.png")}
                        alt="Email Icon"
                      />
                      <p>info@ingabosyndicate.org</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={require("./images/social-media-icons/linkedin-icon.png")}
                        alt="LinkedIn Icon"
                      />
                      <p>Ingabo Syndicate</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={require("./images/social-media-icons/twitter-icon.png")}
                        alt="Twitter Icon"
                      />
                      <p>@INGABOSYNDICAT1</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer-quick-links">
              <h1>Quick links</h1>

              <ul>
                <li>
                  <a target="_blank" href="https://www.ingabosyndicate.org/">
                    Website
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.shop.ingabosyndicate.org/">
                    Shop
                  </a>
                </li>
                <li>
                  <a href=""
                  onClick={navigate('/input')}
                  >Insert Record</a>
                </li>
              </ul>
            </div>

            <div class="footer-support">
              <h1>Support</h1>

              <p>
                Please reach out to any of the following contact if you have
                questions:
              </p>

              <ul>
                <li>
                  <a href="mailto:niyovalentin19@gmail.com">
                    <img
                      src={require("./images/social-media-icons/email-icon.png")}
                      alt="Email Icon"
                    />
                    <p>niyovalentin19@gmail.com</p>
                  </a>
                  <a href="tel:+250786267292">
                    <img
                      src={require("./images/social-media-icons/phone-icon.png")}
                      alt="Email Icon"
                    />
                    <p>(+250) 786 267 292</p>
                  </a>
                </li>
                <li>
                  <a href="mailto:princeelysee@gmail.com">
                    <img
                      src={require("./images/social-media-icons/email-icon.png")}
                      alt="Email Icon"
                    />
                    <p>princeelysee@gmail.com</p>
                  </a>
                  <a href="tel:+250788478652">
                    <img
                      src={require("./images/social-media-icons/phone-icon.png")}
                      alt="Email Icon"
                    />
                    <p>(+250) 788 478 652</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-text">
            <p>&copy; 2023 Ingabo Syndicate. All rights reserved.</p>
          </div>
        </div>
      </>
    );

}

export default Footer;