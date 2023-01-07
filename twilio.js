const accountSid = "AC6012408cb23768c2c55ab18884f4cf40";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

console.log(authToken);

// client.messages
//   .create({ body: "Hello from Twilio", from: "+16294683116", to: "+250788478652" })
//   .then(message => console.log(message.sid));