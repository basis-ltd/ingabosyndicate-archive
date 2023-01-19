require('dotenv').config();

const express = require('express');
const app = express();
const twilio = require('twilio');
const port = 5000 || process.env.PORT; 
const cors = require('cors');
const bodyParser = require('body-parser');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountTelephone = process.env.TWILIO_PHONE_NUMBER;

console.log(accountSid, authToken, accountTelephone);

// Create a new Twilio client
const client = new twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO OUR EXPRESS SERVER");
});

app.post('/messages', (req, res) => {

    // Get the phone number and message text from the request body
    const { recipient, message } = req.body;
  
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
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });