// art-template
// 简洁而高效的模板引擎

// 语法:
// 标准语法
// {{}}

var http=require("http")
var art=require("art-template")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	fs.readFile("./view/index.art",(err,data)=>{
		console.log(data.toString())
		// 获取art-template模板
		var template=data.toString() //需要转码
		var list=["tom","dadd","node"]
		//render 模板  数据
		var htmlData=art.render(template,{a:list})
		res.end(htmlData)
	})
}).listen(3000)