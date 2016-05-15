/**
 * Created by liuyanhao on 13/5/16.
 */
/**
 * 工厂模式,可以创建多个相似的对象
 * @param name
 * @param age
 * @param job
 * @returns {Object}
 */
function createPerson(name, age, job) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.job = job;
    obj.sayName = function () {
        alert(obj.name);
    }
    return obj;
}

var p1 = createPerson("liu", 18, "前端工程师");
var p2 = createPerson("yan", 18, "后端工程师");
var p3 = createPerson("hao", 18, "全栈工程师");
console.log(p1);
console.log(p2);
console.log(p3);


