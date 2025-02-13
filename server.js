require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('the server is running');
});

const listener = app.listen(3000, () => {
    console.log(`listening on port ${listener.address().port}`);
    console.log(`your secret password is ${process.env.SECRET_PASSWORD}`);
});