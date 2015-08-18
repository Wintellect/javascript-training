
var myObject = {
    myValue: 123,
    getMyValue: function() {
        return this.myValue;
    }
};

var myOtherObject = {
    myValue: 456
};

var testFxn = myObject.getMyValue;
console.log(testFxn.call(myOtherObject)); // 456

