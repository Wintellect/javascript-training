
var myObject = {
    value: 123
};

function MyMixin() {
    this.doubleIt = function() {
        return this.value * 2;
    };
}

MyMixin.call(myObject);

console.log(myObject.doubleIt()); // 246

