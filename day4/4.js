//接收post传输的数据
// 中间件       body-parsar  （body-parser为第三方，因此需要npm下载）
var express=require("express")
var bodyParser=require("body-parser")
var app=express()
//使用中间件  use
// 处理json数据
app.use(bodyParser.json())
//处理字符串
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("首页")
    
})
app.post("/dopost",(req,res)=>{
    console.log(req.body);
    res.send({"data":"接收的post的数据为："+req.body.name})

})


app.listen(3000)