/**
 * Created by liuyanhao on 14/5/16.
 */
/**
 * 构造函数模式
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        alert(this.name);
    }
}
var p1 = new Person("liu", 20, "前端工程师");
var p2 = new Person("yan", 18, "后端工程师");
console.log(p1.constructor == Person); //true
console.log(p2.constructor == Person); //true
console.log(p1 instanceof Object); //true
console.log(p2 instanceof Person); //true