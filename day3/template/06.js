// EJS--处理js引擎
// 定义：高效的javascript模块引擎

var http=require("http")
var ejs=require("ejs")
var fs =require("fs")
http.createServer((req,res)=>{
        //render  渲染第一个参数表示的是模板，第二个参数代表的是数据{对象}
        //compile 编译                  模板                数据
        //template
        /*标签
        <%%>  流程控制标签
        <%=%> 输出
        <%#%> 注释
        <%_ %>  去除前面的空格
        <% _%>  去除后面的空格
        <%-%>   语句解析    转译结构到模板 配合<include/>(包含)shiyong1
        */
    fs.readFile("./view/index.ejs",(err,data)=>{
        var template=data.toString()
        var list=["vue","react","node"]
        var result=ejs.render(template,{list:list})

        //response(响应前端页面请求)
        res.end(result)
    })
}).listen(3000)