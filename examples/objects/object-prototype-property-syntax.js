
function MyObject(initialValue) {
    this._myValue = initialValue;
}

MyObject.prototype = {
    get myValue() { return this._myValue; },
    set myValue(v) { this._myValue = v; },
};

var v = new MyObject(123);
console.log(v.myValue); // 123
v.myValue = 456;
console.log(v.myValue); // 456

