
var myObject = {
    myValue: 123,
    getMyValue: function() {
        return this.myValue;
    }
};

console.log(myObject.getMyValue()); // 123

