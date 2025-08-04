require('dotenv').config();

const express = require('express');
const app = express();
const path = require("path");

const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.set("view engine","ejs");

// for environment variables
console.log('User from env:', process.env.GMAIL_USER);
console.log('Pass from env:', process.env.GMAIL_APP_PASSWORD);
console.log('Pass from env:', process.env.RECAPTCHA_SECRET_KEY);


const mail_rtr = require('./routers/mail');
app.use('/mail', mail_rtr);


const port = 5000;
app.listen(port, () => {
    console.log(`Server is now listening at http://localhost:${port}`);
});