// public 
var express=require("express")
var path=require("path")
var app=express()
//静态资源中间件  express.static  中间件通过use去使用，这样才能保证和express相关联
//和express进行关联

var static=path.resolve(__dirname,"public")
console.log(static);
//直接访问写死的路径
//app.use(express.static("./public"))
app.get("/",async (req,res)=>{
    res.send("服务搭建成功")

})
// app.use(express.static(stat))
//可以直接使用app.use(express.static("./public")),不用使用path
app.listen(3000)
// ./public和static区别?/
// public 修饰是非静态方法，该类方法属于对象，在对象初始化（new Object()）后才能被调用；
// public static 修饰是静态方法，属于类，使用类名.方法名直接调用。
// 非静态方法之间可以互相调用，非静态方法也可以调用静态方法；
// 但是静态方法不可以直接调用（未初始化的）非静态方法。由于 public static void main 作静态方法，所以遵循这个原则。
