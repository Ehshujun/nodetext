var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if (req.url=="/favicon.ico") {
        rerurn
    }
    if (req.url=="/bar") {
        fs.readFile("./bar.html",(err,date)=>{
            res.end(date)
        })
    } else if (req.url=="/foo") {
        fs.readFile("./foo.html",(err,date)=>{
            res.end(date)
        })
    }else{
        fs.readFile("./404.html",(err,date)=>{
            res.end(date)
        })
    }

}).listen(3000)