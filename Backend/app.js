const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config();

const categoryRoute = require('./routes/category-routes');

const app = express();

//avail the request data to req.body
app.use(bodyParser.json());

//set initial headers
app.use((req, res, next) => {
  res.setHeader("Acess-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//category routes
app.use('/api', categoryRoute);

//default route of 404
app.use('/', (req, res) => {
  res.send('404 Route Not Found');
  res.end();
})

//mongo db connection string
const mongoDbConnectionString = process.env.MONGO_DB_CONNECTION_STRING;
mongoose.connect(mongoDbConnectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => {
  console.log('MongoDB Connected');
  app.listen(5000);
}).catch(err => {
  console.log(err);
});
