var express=require("express")
//console.log(express)
var app=express()

//get 指代的是get请求
app.get("/",(req,res)=>{
    console.log(arguments);
    res.send({"success":"ok","get请求成功+data":["name"]})
    

})
// app.post("/",(req,res)=>{
//     console.log(arguments);
//     res.send({"success":"ok","data":""})
    

// })
//all 代表所有
// 什么时候会使用app.all?  控制全局的功能是需要使用all 
app.all((req,res)=>{
    res.send({"data":"数据请求"})
})
app.listen(3000)