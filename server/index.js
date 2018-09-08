const express = require('express');
const app = express();
const db = require('../database/index.js');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3002, () => console.log('Listening on port 3002...'));