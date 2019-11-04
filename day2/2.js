var a=1
function add(){
	console.log(1)
}
function Person(name,age) {
	this.name=name
	this.age=age
}
var person=new Person
// exports.a=a
// exports.add=add
// module.exports.a=a
// 针对面向对象和类的方式,使用module.exports
module.exports={
	person:person
}