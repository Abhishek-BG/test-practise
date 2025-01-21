const http = require('http')
const PORT = 8080;
const {addMath,subMath} = require('./math'); //files must be imported from dir
const homePageGet= require('./homePage');

const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    homePageGet(request,response);
    

})
server.listen(PORT,()=>{
    console.log(`server is live in port:${PORT}`);
})

