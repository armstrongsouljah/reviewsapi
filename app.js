const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviews');

const app = express();
//attach middleware

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// declare routes
app.use('/reviews', reviewRoutes)

app.listen(4000, ()=> console.log('server is running'));
