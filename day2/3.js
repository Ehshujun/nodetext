// 路由试图
var http = require("http")
// var fs=require("fs")
var router=require("./static/router")
http.createServer((req,res)=>{
    //req.url
    // if (req.url=="/") {
    //     //fs.readFile
    //     router.home(req,res)

    // }else if (req.url=="/about") {
    //     router.about(req,res)
    // }else if (req.url=="/news") {
    //     router.news(req,res)
    // }else{
        // res.end("404")
    // }

    switch(req,res){
        case "/":router.home(req,res)
        break
        case "/about":router.about(req,res)
        break
        case "/news":router.news(req,res)
        break
    }


}).listen(3000)

//exports的应用： 通过判断url地址栏选择不同的链接暴露
/*  需求：
// 1.定义一个路由文件router.js
// 2.在router中定义三个路由视图
// 3.在0.3js中通过路径进行访问路由视图
*/