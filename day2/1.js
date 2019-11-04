// 查询字符串
var queryString=require("querystring")
// var obj=queryString.parse("name=tom&sex=0&id=1")
// var obj=queryString.stringify({ name: 'tom', sex: '0', id: '1' })
// var obj=queryString.escape("name贺姝珺")     //以%的形式进行编码
var obj=queryString.unescape("%E8%B4%BA%E5%A7%9D%E7%8F%BA")  //解析
console.log(obj)
