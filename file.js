//fs is the inbuit module 
const fs = require("fs");

// async 
//fs.writeFileSync("./text.txt"," Hey There , Welcome!!! ");

//sync
//fs.writeFile("./text1.txt","Hey There!!" ,(err)=>{});

// read async
//const result =fs.readFileSync("./text1.txt" ,"utf-8");
//console.log(result);

//read sync
/*
fs.readFile("./text.txt","utf-8",(err,res)=>{
    if(err)
    {
      console.log("Error",err);
    }
    else
    {
      console.log(res);
    }
}) */
    

// append 
fs.appendFileSync("./text.txt",' How was your day ??\n');

