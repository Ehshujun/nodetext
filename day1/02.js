//解决乱码

var http=require("http")
http.createServer(function (req,res) {
    //设置请求响应头    解决乱码
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.end("中国")
}).listen(3000)