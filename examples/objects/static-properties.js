
function MyObject() {
}

MyObject.ConstantValue = 123;
MyObject.GetConstantValue = function() {
    return MyObject.ConstantValue;
};

console.log(MyObject.GetConstantValue()); // 123

