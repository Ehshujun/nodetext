// 接收get请求数据的参数
var express=require("express")
var app=express()


app.get("/",(req,res)=>{
    res.send("默认请求")
    
})
app.get("/list",(req,res)=>{
    console.log("接收到的参数为"+req.query);
    res.send({"data":req.query})
    
    
})
//路由必须精确匹配
app.get("/getid/:id",(req,res)=>{
    console.log(req.params.id);
    res.send("接收的id为"+req.params.id)

    
})
app.listen(3000)
// get请求中query和params的区别？
// params限制性比query严格
// query使用范围更广，只要是get请求都可以使用
// params一般用在列表到详情的跳转

