var fs = require("fs")
var http = require("http")
var form=require("formidable")
var path=require("path")
var sd=require("silly-datetime")
http.createServer((req,res)=>{
    // if (req.url=="favicon.ico") {
    //     return
    // }
    if (req.url=="/dopost") {
        var fm=form.IncomingForm()
        //fields  文本域   ;fiels    文本
        fm.uploadDir="./upload"
        fm.parse(req,function (err,fields,files) {
            console.log(files)
            var low=files.pic.path
            var extname=path.extname(files.pic.name)
            var time=sd.format(new Date(),"YYYYMMDDHHmmss")
            var fanishon="./upload/"+time+extname
            // console.log(time)
            fs.rename(low,fanishon,(err)=>{
                if(err) throw err
            })
            res.end("success")
        })
        
        
        }
    
}).listen(3000)