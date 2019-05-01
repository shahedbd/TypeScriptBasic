var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.geetings = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Shahed');
console.log(emp1.employeeName);
console.log(emp1.geetings());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegatework = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Mr. Shahed');
m1.delegatework();
m1.geetings();
console.log(m1.employeeName);
