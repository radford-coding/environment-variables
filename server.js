const express = require('express');
const morgan = requires('morgan');
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('the server is running');
});

const listener = app.listen(3000, () => {
    console.log(`listening on port ${listener.address().port}`);
});