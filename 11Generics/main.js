function identity(arg) {
    return arg;
}
var output = identity("BANGLADESH");
console.log(output);
//Generic Classes
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = " + this.key + ", val = " + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "R M Shahidul Islam");
kvp1.display();
var kvp2 = new KeyValuePair();
kvp2.setKeyValue("CTO", "ABC Kamal");
kvp2.display(); //Output: Key = CEO, Val = Bill
