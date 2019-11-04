var express=require("express")
var app=express()
var art=require("express-art-template")
//设置模板引擎

// app.set("view engine","ejs") //这种方式为ejs
app.engine("html",art)
app.get("/",(req,res)=>{
    var list=["tom","jack","rose"]
    res.render("home.html",{list:list})

})
app.listen(3000)

// express-art-template是新出的模块，所以用engine加载
//
// 

