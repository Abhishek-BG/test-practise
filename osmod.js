const os = require('os');
//dotenv it was a module 
require('dotenv').config();
console.log(os.type()) //'DARWIN' 
console.log(os.platform()) //'darwin'
console.log(os.arch()) //'x64'
console.log(process.env.PORT);