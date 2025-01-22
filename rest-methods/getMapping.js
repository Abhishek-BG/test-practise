const url = require('url');
const getTasks=((req,res,tasks)=>{
const {pathname,query} = parseUrl;
const id =parseInt(query['id'],10);
const taskIndex = tasks.findIndex((t)=> t.id===id);
   if(taskIndex==-1){
    res.writeHead(404);
    res.end(JSON.stringify({message:"Task not found"}));
   }else{
    res.writeHead(200);

    res.end(JSON.stringify({data:tasks[taskIndex]}));

}
})
module.exports = getTasks;
