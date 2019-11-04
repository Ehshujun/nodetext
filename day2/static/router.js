//路由试图
function home(req,res){
    res.end("home")         //响应回调输出
}
function about(req,res){
    res.end("about")
}
function news(req,res){
    res.end("news")
}
exports.home=home
exports.about=about
exports.news=news