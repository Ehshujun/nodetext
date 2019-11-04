var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{

    // 普通获取数据的方式
    // fs.readFile("./1.txt",(err,data)=>{
    //     console.log(data)
    //     res.end(data)
    // })
    // 通过流的方式获取数据
    //pipe  创建文件读取流
    var fsStream=fs.createReadStream("./1.txt")  //sourse
    fsStream.pipe(res)              //作用于服务端
    
    //data end
}).listen(3000)