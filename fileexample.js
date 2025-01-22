const fs = require('fs')
//Async

//sync 
const rep = fs.writeFileSync("./text.txt","Thi is Sync\n");

fs.writeFile("./text.txt","This is Async\n",(err)=>{
    console.log
    if(err){console.log(`err:${err}`)}
});

fs.readFile("./text.txt","utf-8",(err,res)=>{
    if(err){
        console.log(`error :${err}`);
    }else{
        console.log(`Async call:${res}`);
    }
})



fs.appendFileSync("./text.txt","rajesh\n");
fs.appendFileSync("./text.txt","ramu\n");
const res = fs.readFileSync("./text.txt","utf-8");
console.log(`Sync call:${res}`);