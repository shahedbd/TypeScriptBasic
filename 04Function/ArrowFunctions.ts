// Arrow functions are always anonymous and turn:
// (parameters) => {expression}

// Named function
function add(x, y) {
    return x + y;
}

// Call named function
console.log(add(5, 10));

var add2 = (x, y) => x + y;
console.log(add2(5, 10));
