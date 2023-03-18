require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendResponseMessage = (message, to, from) => {
    console.log(message, to, from);
    client.messages
        .create({
            from: from,
            body: message,
            to: to
        })
        .then(() => console.log('message sent!'))
        .catch(err => console.error(err));
}

module.exports = {
    sendResponseMessage
}
