// buffer    二进制数据     缓存区

// 第一种定义buffer的方式
// Buffer.from   把字符串转化buffer
// var buf=Buffer.from()
// console.log(buf);
var buf=Buffer.from("node")
// var buf1=Buffer.from("node")
// var buf2=Buffer.from("aaa")
// var buf=Buffer.concat([buf1,buf2])
// 
// 返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf=Buffer.alloc(10)
// console.log(buf.length);
// 不安全  不推荐使用，未被初始化的buffer--转码之后有原来的数据
// var buf=Buffer.allocUnsafe(10)     //====>不使用
console.log(buf);

/*
// 什么是buffer？
// 从类型说，就是一个类数组（可以用数组的方法）
// 从内存来说，就是开辟的新内存空间

// **作用？
// 处理二进制数据--（目的）-->解决数据传输过大
// 案例：文件流  事件流  Tcp
// 别名：缓存区（等待区）
// 什么是二进制数据(0b)？（八进制(0)、十六进制(0x)）
// -->返回0和1
// **创建buffer？
// new buffer()-->废弃
// 因为buffer是一个全局对象，所以不需要通过requre加载
// **buffer可以传输的类型？
// ==》string、Buffer、ArrayBuffer、Array、or Array-like Object
// **buffer下有哪些方法？
// ==》toJson  toString  slice  concat  length
// 字节  bit  byte
//**buffer的编码类型？
// ----->utf8  base64  hex   Ascil   unicode
// **buffer和cache的区别？
// buffer带有临时的缓存(相当于临时居住地)，cache是永久性的（永久的家）
*/


