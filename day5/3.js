//views
var express=require("express")
var app=express()
// var ejs=require("ejs")
//在express中设置模板引擎
// art-module新出来的一个模板引擎

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    var list=["tom","jack","rose"]
    res.render("index.ejs",{list:list})
})


app.listen(3000)