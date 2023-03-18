require('dotenv').config()

const port = process.env.PORT;


const express = require('express');
const {handleCommand} = require("./handleCommand");
const {forwardToGpt} = require("./forwardToGpt");
const {sendResponseMessage} = require("./sendResponseMessage");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/messageIn', (req, res) => {
    console.log('messageIn...');
    console.log(req.body);
    let result;

    const {
        Body: message,
        From: from,
        To: to
    } = req.body;

    if (message.startsWith('/')) {
        console.log('this is a command, handling...');
        result = handleCommand(message, from);
    } else {
        console.log('this is just a message, forwarding...');
        result = forwardToGpt(message, from);
    }

    sendResponseMessage(result, from, to);

    res.status(200).send('');
});

// app.post('/statusUpdate', (req, res) => {
//     console.log('statusUpdate...');
//     res.sendStatus(200);
// });

// app.post('/', (req, res) => {
//     console.log('/...');
//     console.log('got no idea what\'s going on');
//     console.log(req.body);
//     res.sendStatus(200);
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
