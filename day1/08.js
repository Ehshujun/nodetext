var http=require("http")
var url = require("url")

http.createServer(function (req,res) {
//协议   主机/域名  端口？search  #hash
    var result='http//localhost:3000/?username=112&password=112'
    // var obj=url.parse(result)   //parse

    var obj=url.format ({
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?username=112&password=112',
        query: 'username=112&password=112',
        pathname: 'http//localhost：3000',
        path: 'http//localhost：3000?username=112&password=112',
        href: 'http//localhost：3000?username=112&password=112' 
    })      //format
    
    // var obj = url.resolve("http://localhost:3000/","/")      //resolve

    console.log(obj);
    res.end()
}).listen(3000) 