const os = require('os');
var freeMemory = os.freemem();
console.log('Total memory is' + freeMemory);
var user = os.userInfo();
console.log(user);