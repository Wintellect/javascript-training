
function MyObject(initialValue) {
    this.myValue = initialValue;
}

MyObject.prototype = {
    getMyValue: function() {
        return this.myValue;
    }
};

var v = new MyObject(123);
console.log(v.getMyValue()); // 123

