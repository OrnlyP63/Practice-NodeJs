const expressFunction = require('express');
const expressApp = expressFunction();

expressApp.use(expressFunction.json());

const students = [
  {id:1, 'name':'Phiphat'},
  {id:2, 'name':'Prayuth'},
  {id:3, 'name':'Prewith'}
]

expressApp.post('/api/add', function(req, res){
  const studentName = req.body.name;
  if (studentName.length<=2) {
    res.status(400).send('Error can not add student!');
  } else {
    const student = {
      id: students.length + 1,
    'name': studentName
    }

    students.push(student);
    res.send(student);
  }
});

const port = process.env.port || 3000;
expressApp.listen(port, function(){
  console.log('Listening on port', port);
});