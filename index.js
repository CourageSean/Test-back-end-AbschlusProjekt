const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoose = require('mongoose');
const Spot = require('./models/Spot');

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
app.get('/initialMarkers', (req, res) => {
  Spot.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get('/details/:id', (req, res) => {
  Spot.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.get('/', (req, res) => {
//   const spot = new Spot({
//     name: 'Nahe Erholungsgebiet',
//     lat: 50.92089720514569,
//     lng: 6.114956327075176,
//   });
//   spot
//     .save()
//     .then((result) => {
//       console.log('saved to database');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// POST
app.post('/', (req, res) => {});

// DELETE
app.delete('/', (req, res) => {});
