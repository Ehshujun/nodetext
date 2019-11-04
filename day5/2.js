//npm install cookie-parser --save

//与01.html中from表单相连
var express=require("express")
var app=express()
var path=require("path")
var cookieParser=require("cookie-Parser")
var static=path.resolve(__dirname,"public")
app.use(cookieParser())
app.use(express.static(static))

app.get("/",(req,res)=>{
    console.log("首页中获取："+req.cookies);
    
    res.send({"data":"login中的cookies为："+req.cookies})
})
//cookie中间件
//让express和cookie建立器联系
//设置setcookie     maxage 过期时长 httponly 只准许在服务端修改cookies
app.get("/login",(req,res)=>{
    var obj=req.query.username
    // req.cookies.cookiename=obj
    // console.log(req.cookies.cookiename)
    res.cookie('username',obj,{maxAge:3600,httpOnly:true})
    res.send({"data":obj}) 
})
//获取cookies
app.get("/list",(req,res)=>{
    
    res.send()
})
app.listen(3000)


//signed 是否生成签名   domain 域名 secure

//res.send表示结束，东西要放到前面


// /***
//  * 什么是cookies？
//         cookies是存在于访问者计算机的一个变量，便于访问同一域名或服务器存储的用户消息。
//  * cookies的优缺点？
// *优点：1、协助服务端承载压力。
//        2、存在过期时间，不便于攻击者进行攻击。
// *缺点：1、有长度限制
//       2、安全性较低
//       3储存量小  4kb
//  * cookies存储大小？4kb
//  * cookies的安全性？
//       1、相对比较低
// *如何解决？
//       生成签名
//  *cookies的特点？
//       1、cookies保存在浏览器本地
//       2、cookies默认不加密，用户可以之间看到
//       3、cookies支持被删除
//       4、cookies便于用于攻击
//       5、cookies易于篡改
//  * *//