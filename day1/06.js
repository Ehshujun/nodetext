var http=require("http")
// var url = require("url")
// var path = require("path")
// console.log(url)
// console.log(path)
http.createServer(function (req,res) {
    console.log(req.query);
    console.log(req.rer(query));

    res.end(req.query)
    
}).listen(3000)