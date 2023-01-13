require('dotenv').config();

const express = require('express');
const app = express();
const twilio = require('twilio');
const port = 5000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountTelephone = process.env.TWILIO_PHONE_NUMBER;

console.log(accountSid, authToken, accountTelephone);

// Create a new Twilio client
const client = new twilio(accountSid, authToken);

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});

app.post('/messages', (req, res) => {

  console.log('send-message is now working!')
    // Get the phone number and message text from the request body
    const { phoneNumber, messageText } = req.body;
  
    // Send the message using the Twilio client
    client.messages
      .create({
         body: messageText,
         from: accountTelephone,
         to: phoneNumber
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
          message: 'An error occurred while sending the message'
        });
      });
  });
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });