require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

const mail_rtr = require('./routers/mail');
app.use('/mail', mail_rtr);

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Serving API and React App from this single server.`);
    console.log(`Access the site at: http://localhost:${port}`);
});