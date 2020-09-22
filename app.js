const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const someRoutes = require('./src/sumRoutes/sum-routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(someRoutes);

app.listen(5000);