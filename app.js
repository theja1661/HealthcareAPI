const express = require('express');
const mongoose = require('mongoose');
const serviceRoutes = require('./routes/serviceRoutes'); 
const config = require('./config'); 

const app = express();


app.use(express.json());


app.use('/api/v1', serviceRoutes);


mongoose.connect(config.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connected');
  })
  .catch((error) => {
    console.error('DB connection failed:', error);
  });


app.listen(5500, () => {
  console.log('Server is running on port 5500');
});
