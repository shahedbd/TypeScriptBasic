//Accessing Array Elements
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
//Single statement declaration and initialization
var nums = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
//Array Object
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
// Array Constructor accepts comma separated values
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Array Methods
//Join
var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log("str : " + str);
var str = arr.join(", ");
console.log("str : " + str);
var str = arr.join(" + ");
console.log("str : " + str);
//every
function isBigEnough(element, index, array) {
    return (element >= 4);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("Test Value : " + passed);
//filter
function isBigEnough2(element, index, array) {
    return (element >= 10);
}
var passed2 = [12, 5, 8, 130, 44].filter(isBigEnough2);
console.log("Test Value : " + passed2);
//Array forEach
var num = [7, 8, 9];
num.forEach(function (value) {
    console.log(value);
});
//Array indexOf()
var index = [12, 5, 8, 130, 44].indexOf(8);
console.log("index is : " + index);
//Array lastIndexOf()
var index = [12, 5, 103, 8, 102, 101, 130, 44].lastIndexOf(8);
console.log("index is : " + index);
//Array map()
var numbers = [1, 4, 9, 17];
var roots = numbers.map(Math.sqrt);
console.log("roots is : " + roots);
//Array pop()
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is : " + element);
var element = numbers.pop();
console.log("element is : " + element);
//Array push()
var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers);
length = numbers.push(20);
console.log("new numbers is : " + numbers);
// Array reduce()
var total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
console.log("total is : " + total);
//Array reduceRight()
var total = [0, 1, 2, 3].reduceRight(function (a, b) { return a + b; });
console.log("total is : " + total);
//Array reverse()
var arrReverse = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + arrReverse);
//Array shift
var arrShift = [10, 1, 2, 3].shift();
console.log("Shifted value is : " + arrShift);
//Array slice
var arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log("arr.slice( 1, 2) : " + arr.slice(1, 2));
console.log("arr.slice( 1, 3) : " + arr.slice(0, 3));
//Array some
function isBigEnough3(element, index, array) {
    return (element >= 10);
}
var retval = [2, 5, 8, 1, 4].some(isBigEnough3);
console.log("Returned value is : " + retval);
var retval = [12, 5, 8, 1, 4].some(isBigEnough3);
console.log("Returned value is : " + retval);
//Array sort
var arr = new Array("orange", "mango", "banana", "sugar");
var sorted = arr.sort();
console.log("Returned string is : " + sorted);
//Array splice
var arr = ["orange", "mango", "banana", "sugar", "tea"];
var removed = arr.splice(2, 0, "water");
console.log("After adding 1: " + arr);
console.log("removed is: " + removed);
removed = arr.splice(3, 1);
console.log("After removing 1: " + arr);
console.log("removed is: " + removed);
//Array toString
var arr = new Array("orange", "mango", "banana", "sugar");
var str = arr.toString();
console.log("Returned string is : " + str);
//Array unshift
var arr = new Array("orange", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned array is : " + arr);
console.log("Length of the array is : " + length);
