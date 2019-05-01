var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { }  //Type template 
}
person.sayHello = function () {
    console.log("hello " + person.firstName)
}
person.sayHello()


//Objects as function parameters
var person2 = {
    firstname: "R M Shahidul Islam",
    lastname: "Shahed"
};
var invokeperson = function (obj: { firstname: string, lastname: string }) {
    console.log("First name :" + obj.firstname)
    console.log("Last name :" + obj.lastname)
}
invokeperson(person2)