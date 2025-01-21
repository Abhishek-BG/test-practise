const http = require('http')
const PORT = 8080;

//register a variable to handle my server and use
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
        //response header for all //global
    if(request.url==='/' && request.method==='GET'){
        response.end(`Server is Live : ${new Date()}`);
    }else if(request.url==='/form' && request.method==='POST'){
       console.log(response);
    }
    else{
        response.end('404 Not Found');
    }
})
server.listen(PORT,()=>{
    console.log(`server is live in port:${PORT}`);
})