const fs = require("fs")

//callback | blocking | sync
console.log("fun(1)")
// const res = fs.readFileSync("./tutornames.txt","utf-8");
//console.log(res);\

//non-callback | non-blocking | async
fs.readFile("./tutornames.txt","utf-8",(err,res)=>{
    if(err){
        console.log(`error :${err}`);
    }else{
        console.log(res);
    }
})

console.log("fun(2)");
