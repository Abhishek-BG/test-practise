const  homePageGet=((request,response)=>{
    if(request.url==='/' && request.method==='GET'){
        response.end(`Server is Live : ${new Date().toString().split('GMT+')[0]}`);
    }else if(request.url==='/form' && request.method==='POST'){
       console.log(response);
    }
    else{
        response.end('404 Not Found');
    }
})
module.exports = homePageGet;