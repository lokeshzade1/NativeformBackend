let color = require('colors');
let mongoose = require('mongoose');
const express = require('express');
const dot = require('dotenv');
const morgan = require('morgan');
let Cors = require('cors');
dot.config();
const app = express();
app.use(express.json());
app.use(
  Cors({
    origin: '*',
  })
);
// const app = require('./Routes/Userroutes');
app.use('/api', require('./Routes/Userroutes'));
app.use(morgan('dev'));
mongoose
  .connect(process.env.ID, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('database connection established...'.blue);
  });
app.listen(5000, () => {
  console.log('Router connection  established...'.blue);
});
