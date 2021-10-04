const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'all-views');
app.get('/', function(req, res){
  //res.status(200).send('Hello World.');
  res.render('first_template', {name: 'Phiphat'})
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});

