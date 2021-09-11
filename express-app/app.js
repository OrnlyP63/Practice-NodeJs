const expressFunction = require('express');
const expressApp = expressFunction();
const students = [
  {id:1, name:'Phiphat'},
  {id:2, name:'Prayuth'}
];

expressApp.get('/', function(req, res){
  res.send('Hello Word.');
});

expressApp.get('/api/students', function(req, res){
  res.send(students);
});

expressApp.get('/api/students/:id', function(req, res){
  const id = req.params.id;
  if (id==1){
    res.send(students[0])
  } else if(id==2){
    res.send(students[1])
  } else {
    res.send('Error 404 not found');
  }
});

const port = process.env.PORT || 3000;

expressApp.listen(port, function(){
  console.log('Listening on port', port);
});