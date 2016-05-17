/**
 * Created by liuyanhao on 16/5/16.
 */
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
}
function SubType() {
    this.subproperty = false;
}

//SubType继承了SubType
SubType.prototype = new SubType();
//子类添加方法
SubType.prototype.getSubValue = function () {
    return this.subproperty;
}
//instance实例指向SubType原型,SubType原型再指向SuperType原型
var instance = new SubType();
console.log(instance.getSubValue());


//自定义超类
function Person(role,name,age) {
    this.name = name;
    this.age = age;
    this.role = role;
    //在子类中不能访问,只能在原型链中才能访问
    var saySuperName = function () {
        console.log("super name:"+name);
    }
}
Person.prototype.sayName = function () {
    console.log("role:"+this.role+",name:"+this.name+"age:"+this.age)
}
//自定义学生类
function Student() {}
//自定义老师类
function Teacher() {}
Student.prototype = new Person("student","liu","20");
Teacher.prototype = new Person("teacher","lyh","50");
var stu = new Student();
var tea = new Teacher();
stu.sayName();
tea.sayName();



