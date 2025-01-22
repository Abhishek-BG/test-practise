const http = require('http');
const url = require('url');
const getTasks = require('./getMapping')
const PORT = 8000;
let tasks = [
    {id:0,title:"Learn our node js things",completed:false},
    {id:1,title:"Solve all problems",completed:true},
]
const server  = http.createServer((req,res)=>{
    getTasks(req,res,tasks);
})

server.listen(PORT,()=>{
    console.log("Rest Server is live");
})
