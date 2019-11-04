// 监控日志 readline        
var fs=require("fs")
var readline=require("readline")
var readStream=fs.createReadStream("./1.txt")

// console.log(readline)
// data end   line监听日志事件

// data  监听输入数据
// end   完成数据读取
// line  监听日志事件
// close 日志读取完成关闭


var rl=readline.createInterface({
    //监听输入数据
    input:readStream
})

//日志执行事件
rl.on("line",(linedata)=>{
    console.log(linedata);
    console.log(new Date()+"linenum执行");
})
//new Data()拼接事件
//日志读取完成关闭
rl.on("close",()=>{
    console.log("line监听数据完毕");
    
})