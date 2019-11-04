// createReadStream   createWriteStream
// 事件   data end


var fs = require("fs");
var readstream = fs.createReadStream('./1.txt');   // 文件读取流
var length=0
// var ws = fs.createWriteStream('./1.txt');  // 文件写入流
// 探究数据流转的过程

readstream.on('data',(chunks)=>{
    length++
    console.log(chunks)                 //输出buffer,相对快速
    // console.log(chunks.toString)
});
readstream.on('end',()=>{
    length++
    console.log(length)
});

