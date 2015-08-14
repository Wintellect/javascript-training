
var myObject = {
    myValue: 123,
    getMyValue: function() {
        return this.myValue;
    }
};

var testFxn = myObject.getMyValue;
console.log(typeof testFxn); // function
console.log(testFxn()); // undefined

