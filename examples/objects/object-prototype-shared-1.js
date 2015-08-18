
function MyObject(initialValue) {
    this.myValue = initialValue;
}
MyObject.prototype.getMyValue = function() {
    return this.myValue;
};

var v1 = new MyObject(123);
var v2 = new MyObject(456);
console.log(v1.getMyValue()); // 123
console.log(v2.getMyValue()); // 456
console.log(v1.getMyValue === v2.getMyValue); // true

