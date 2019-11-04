//fs file system 文件系统
//require 加载
var http = require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    //读文件
    fs.readFile("bar.html",function (err,date) {
        console.log(date)
        res.end(date)
    })
}).listen(3000)