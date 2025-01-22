function parseBody(req){
    return new Promise((resolve,reject)=>{
        let body ="";
        req.on("data",(chunk)=>{
            body += chunk.toString();;
        });
        req.on("end",()=>{
            try{
                resolve(JSON.parse(body));
            }catch(err){
                reject(err);
            }
        })
    })
}

const CreateTask=(async (req,res,tasks)=>{
    try{
        const body = await parseBody(req);
        console.log("Data received");
        const newTask ={
            id:tasks.length+1,
            title :body.title,
            completed:body.completed || false,
        };
        tasks.push(newTask);
        res.writeHead(201);
        res.end(JSON.stringify({newTask}));

    }catch(error){
        // res.status(500).json({message:'SERVER ERROR'})
        res.writeHead(500);
        res.end(JSON.stringify({message:error.message}));
    }
})
module.exports = CreateTask;