
var v1 = {
    getValue: function() { return 123; }
};

function MyObject() { }
MyObject.prototype.getValue = function() { return 123; };

var v2 = new MyObject();

console.log(v1 instanceof MyObject); // false
console.log(v2 instanceof MyObject); // true

