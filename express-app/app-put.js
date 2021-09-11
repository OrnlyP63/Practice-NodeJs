const expressFunction = require('express');
const expressApp = expressFunction();

expressApp.use(expressFunction.json());

const students = [
  {id:1, name:'Phiphat'},
  {id:2, name:'Prayuth'},
  {id:3, name:'Prawith'}
]

expressApp.put('/api/update/:id', function (req, res) {
  const id = req.params.id;
  const name = req.body.name;
  if (name.length <= 2){
    res.status(400).send('Error can not update student!');
  } else {
    const student = students.find(i=> i.id === parseInt(id));
    if (student) {
      student.name = name;
      res.send(students);
    } else {
      res.status(400).send('Cannot find student to update');
    }
  }
});

const port = process.env.port || 3000;
expressApp.listen(port, function(){
  console.log('Listening on port ', port);
});