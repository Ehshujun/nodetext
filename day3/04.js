
var fs=require("fs")
//压缩模块  zlib
var zlib=require("zlib")
var readStream=fs.createReadStream("./1.txt")
var writeStream=fs.createWriteStream("./1.txt.gz")
// console.log(writeStream)
//流支持链式操作  zlib.createGzip() -->创建压缩包  (在流的基础上优化)
readStream.pipe(zlib.createGzip()).pipe(writeStream)


// 流的类型？、
// * 1 Readable 可读流	可读流的功能是作为上游，提供数据给下游。
// * 2 Writable 可写流
// * 3 Duplex 可读可写流、双工流
// * 4 Transform 转换流  在读写过程中可以修改和变换数据的Duplex流
// 数据的压缩？zlib
