//req.url   请求。路径（文件路径，地址栏）

var http = require("http")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
//解决执行两次
    console.log(req);
        
        res.end(req.toString)
    
}).listen(3000)