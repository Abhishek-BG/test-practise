const http = require('http');
const url = require('url');
const getTasks = require('./getMapping')
const CreateTask = require('./postMapping');
const PORT = 8000;
let tasks = [
    {id:0,title:"Learn our node js things",completed:false},
    {id:1,title:"Solve all problems",completed:true},
]
const server  = http.createServer((req,res)=>{
    const parseUrl = url.parse(req.url,true) //true parse through the query string into a object
    const {pathname,query} = parseUrl;
    res.setHeader("Content-Type","application/json");
    if(req.method === 'GET' && pathname==='/tasks'){
        getTasks(req,res,tasks);
    }
    else if(req.method==="POST" && pathname==='/tasks'){
        CreateTask(req,res,tasks); //module
    }
    //put
    //delete
})

server.listen(PORT,()=>{
    console.log("Rest Server is live");
})
