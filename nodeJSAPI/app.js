const express = require('express');
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology:true
};
mongoose.connect('mongodb://localhost:27017/hello-mongoose', options)
const app = express();

app.get('/', (req, res) => {
  res.json({message:'ok'})
})

app.listen(9999, ()=>{console.log('ok');})