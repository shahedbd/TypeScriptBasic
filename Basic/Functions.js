function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
//Rest Parameters
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//Default Parameters
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//Anonymous function with parameters
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//The Function Constructor
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
//Recursion and TypeScript Functions
function factorial(number) {
    if (number <= 0) { // termination case
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // function invokes itself
    }
}
;
console.log(factorial(6)); // outputs 720 
//Anonymous Recursive Function
(function () {
    var x = "Hello!!";
    console.log(x);
})();
//Lambda Expression
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //outputs 110 
//Lambda Statement
var fooN = function (x) {
    x = 10 + x;
    console.log(x);
};
fooN(100);
//Syntactic Variations
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");
//Optional parentheses for a single parameter
var display = function (x) {
    console.log("The function got " + x);
};
display(12);
//Optional braces for a single statement, Empty parentheses for no parameter
var disp = function () {
    console.log("Function invoked");
};
disp();
function dispN(x, y) {
    console.log(x);
    console.log(y);
}
dispN("abc");
dispN(1, "xyz");
