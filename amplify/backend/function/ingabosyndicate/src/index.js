require('dotenv').config();
const express = require('express');
const app = express();
const twilio = require('twilio');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

exports.handler = async (event) => {
    // Get Twilio account SID and auth token from environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const telephone = process.env.TWILIO_PHONE_NUMBER;

    // Create a new Twilio client
    const client = twilio(accountSid, authToken);

    // Get the phone number and message text from the event data
    const recipient = event.to;
    const message = event.message;

    // Use the Twilio client to send the message
    try {
        await client.messages.create({
            body: message,
            to: recipient,
            from: telephone // Your Twilio phone number
        });
        return { status: 'success' };
    } catch (err) {
        return { status: 'error', error: err };
    }
};