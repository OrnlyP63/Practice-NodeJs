//read write file with build in Module.
const fs = require('fs');
fs.writeFileSync('test.txt', 'Name: ');
fs.appendFileSync('test.txt', 'Phiphat');