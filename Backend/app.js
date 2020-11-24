const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

const categoryRoute = require('./routes/category-routes');

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

//mongo db connection string
const mongoDbConnectionString = 'mongodb+srv://able:u9AwACS2TfX4aUn@cluster0.046kp.mongodb.net/BookStore?retryWrites=true&w=majority';

mongoose.connect(mongoDbConnectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => {
  app.listen(5000);
}).catch(err => {
  console.log(err);
});
