var fs=require("fs")
var http=require("http")
http.createServer((req,res)=>{
	// 异步读取
	// fs.readFile("./static/1.txt",function(err,data){
    //     console.log(data)
    //     res.end()
        
	// })
	// 同步读取
	// var a=fs.readFile("./static/1.txt")
	// res.end(a)
	
	// 文件存在就写入内容,不存在就创建
	// fs.writeFile("./static/2.txt","dadsasd",(err)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	res.writeHead(200,{"Content-type":"textml;charset=utf-8"})
	// 	res.end("写入成功")
	// })
	
	// 追加内容 {flag:a} 改成append
    // 创建文件夹
	// fs.mkdir("./aa",(err)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	res.end("sdsdsa")
	// })
	
	
	
	// // 删除文件
	// fs.unlink("./static/2.txt",(err)=>{
	// 	if (err){
	// 		throw err
	// 	}
	// 	res.end("success")
    // })
    
	// 删除目录
	// fs.redir("./aa",(err)=>{
	// 	if (err){
	// 		throw err
	// 	}
	// 	res.end("success")
    // })
    
	// // 判断文件状态
	// fs.stat("./static",(err,stats)=>{
	// 	// 查看是否是目录
	// 	console.log(stats.isDirectory())
	// 	// 查看是否是文件
	// 	console.log(stats.isFile())
	// 	res.end("success")
    // })
    
	// // 改文件名
	// fs.rename("./aa","newname",(eer)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	res.end("success")
    // })
    
	// // 添加内容
	// fs.appendFile("","add",err=>{
	// 	if(err) throw err
	// 	res.end("success")
    // })
    
	// 复制文件 copyFile
	// fs.copyFile("./2.txt","./3.txt",err=>{
	// 	if(err) throw err
	// 	res.end("success")
    // })
    
	//打开文件 关闭文件 
	// fs.open("./2.txt","r",(err,fd)=>{
	// 	if(err){
	// 		throw err
	// 	}else{
	// 		// fs.close(fd,function(){
	// 		// 	console.log(close())
	// 		// })
	// 		console.log(fd)
	// 	}
	// 	res.end("success")
    // })
    
	// 判断当前目录里面的内容是文件还是目录
	// 如果是目录则把目录输出
	// if(req.url=="/favicon.ico"){
	// 	return
    // }
            //（防止输出两次）
	// fs.readdir("./aa",function(err,data){
	// 	data.forEach((item,index)=>{
	// 		var s="./aa/"+item
	// 		fs.stat(s,(err,stats)=>{
	// 			if(stats.isDirectory()){
	// 				console.log(item)
	// 			}
	// 		})
	// 	})
	// 	res.end()
	// })
	
}).listen(3000)