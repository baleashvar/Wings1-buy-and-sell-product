const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sellAndBuyRouter = require('./routers/sellAndBuy');

const app = express();

mongoose.connect('mongodb+srv://baleashvar:Stone123@cluster0.jnyfsoz.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
  // Start the server
  const port = process.env.PORT || 8001;
  app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });