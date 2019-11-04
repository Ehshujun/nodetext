
var http = require("http")
var url = require("url")
var fs = require("fs")
// http.createServer((req,res)=>{
// fs.readFile("1.txt",(err,rada)=>{
//     res.end(rada)
// })
// fs.writeFile("2.txt","我是内容absvgdask",{"flag":a},(err)=>{
//     if(err){
//         // throw抛出
//         throw err
//     }
//     res.end("success")
// })
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }
                                        // unlink删除文件
    // fs.unlink("a.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    // })
                                        // 创建文件夹mkdir
    // fs.mkdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
                                        // 删除文件夹rmdir
    // fs.rmdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
                                        // rename 改名
    // fs.rename("./1.txt","./a.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    //
                                        // appendFile  添加内容
    // fs.appendFile("./1.txt","追加的内容",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
                                        // 读取文件夹
    // fs.readdir("./day2", (err, data) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end(data.toString())
    // })
    // 判断是否是文件夹 exists
    // fs.exists("./a",(exists)=>{
    //     if(exists){
    //         console.log("文件夹已经存在")
    //     }else{
    //         fs.mkdir("./aa",(err)=>{
    //             res.end("success")
    //         })
    //     }
    // })

    // stat 判断是文件（状态）目录？还是文件？
    fs.stat("2.txt",(err,stats)=>{
        console.log(stats.isDirectory())
        // (文件夹)
        // console.log(stats.isFile())
        // (文件)
        res.end("222")
    })
}).listen(3000)