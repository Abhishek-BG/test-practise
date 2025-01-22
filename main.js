const http = require('http')
//install dotenv and import the module 
require('dotenv').config();
const PORT = process.env.PORT;
const {addMath,subMath} = require('./math'); //files must be imported from dir
const homePageGet= require('./homePage');
const fs = require('fs');
const path = require('path');
const MimeType ={
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript'
}

const server = http.createServer((request,response)=>{
    const filePath  = path.join(__dirname,'template',request.url==='/home'? 'index.html':request.url);
    const ext = path.extname(filePath)
    const contentType = MimeType[ext] || 'application/octet-stream'
  
    fs.readFile(filePath,(err,data)=>{
        if(err){
            response.writeHead(400,{'Content-Type':'text/plain'});
            return response.end('404 NOt found');
        }
        
        response.writeHead(200,{'Content-Type':contentType});
        response.end(data);
    })

})
//webserver 
server.listen(PORT,()=>{
  
    console.log(`server is live in port:${PORT}`);
})
//linux || mac -> VARIABLE = value node main.js
//windows -> set VARIABLE = value && node main.js
//http://localhost:3000/home
