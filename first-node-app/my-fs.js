const fs = require('fs');
fs.readdir('./', function(err, files) {
  if(err) {
    console.log('we got this error:', err);
  } else {
    console.log('List of file are:', files);
  }
})