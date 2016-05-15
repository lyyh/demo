/**
 * Created by liuyanhao on 14/5/16.
 */
/**
 * 原型模式
 * @constructor
 */
function Person() {}
Person.prototype.name = "liu";
Person.prototype.age = 29;
Person.prototype.job = "前端工程师";
Person.prototype.sayName = function () {
    console.log(this.name)
}
var p1 = new Person();
p1.sayName();
var p2 = new Person();
p2.sayName();
console.log(p1.sayName == p2.sayName) //true,共享所有实例