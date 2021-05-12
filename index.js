const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/User")

// Port
const PORT = process.env.PORT || 5000;

// express app
const app = express();

// verbindung zu mongoDB

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) =>
    app.listen(PORT, () => {
      console.log('listening port 5000');
    })
  )
  .catch((err) => {
    console.log(err);
  });



// middlewares 

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// GET
app.get('/', (req, res) => {});

// POST
app.post('/', (req, res) => {});

// DELETE
app.delete('/', (req, res) => {});
