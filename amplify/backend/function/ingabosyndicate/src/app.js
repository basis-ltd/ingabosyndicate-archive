require('dotenv').config();
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const port = 5000;
const twilio = require('twilio');
const cors = require('cors');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(cors());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// TWILIO CONFIGURATION

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountTelephone = process.env.TWILIO_PHONE_NUMBER;

console.log(accountSid, authToken, accountTelephone);

// TWILIO MESSAGE SENDING

const client = new twilio(accountSid, authToken);

app.get("/", (req, res) => {
  res.send("WELCOME TO OUR EXPRESS SERVER");
});

app.post('/messages', (req, res) => {

    // Get the phone number and message text from the request body
    const {recipient, message} = req.body;
  
    // Send the message using the Twilio client
    client.messages
      .create({
         body: message,
         from: accountTelephone,
         to: recipient
       })
      .then(message => {
        res.send({
          status: 'success',
          message: 'Message sent successfully'
        });
      })
      .catch(err => {
        console.log(err);
        res.send({
          status: 'error',
          message: err.message
        });
      });
  });


app.listen(port, function() {
    console.log("App started on port " + port);
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
