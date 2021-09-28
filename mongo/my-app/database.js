const mongoose = require('mongoose');
const config = {
  autoIndex: true,
  useNewUrlParser: true};

const connectionString = 'mongodb://localhost:27017/node-api-101'

mongoose.connect(connectionString, config)
.then(()=> console.log('Connected to MongoDB...'))
.catch(err => console.log('Cannot connect to MondoDB', err));