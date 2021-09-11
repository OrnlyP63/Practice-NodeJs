const expressFunction = require('express');
const expressApp = expressFunction();

expressApp.use(expressFunction.json());

var students = [
  {id:1, 'name':'Phiphat'},
  {id:2, 'name':'Chomchit'},
  {id:3, 'name':'Prayuth'}
]

expressApp.delete('/api/delete/:id', function(req, res){
  const id =req.params.id;
  const confirmId = req.body.confirmId;
  const student = students.find(i=> i.id === parseInt(id));

  if (student && confirmId === parseInt(id)){
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send('Delete student ' + student.name + ' successfully!');
  } else {
    res.status(400).send('Error cannot delete student!');
  }
});

const port  = process.env.port || 3000;
expressApp.listen(port, function () { 
  console.log('Listen on port ', port);
});