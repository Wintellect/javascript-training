
var myObject = {
    myValue: 123,
    getMyValue: function(prefix, suffix) {
        return [prefix, this.myValue, suffix].join(" ");
    }
};
var otherObject = {
    myValue: 456
};

var test = myObject.getMyValue;
var myArgs = ["<!--", "-->"];
console.log(test.apply(myObject, myArgs)); // <!-- 123 -->
console.log(test.apply(otherObject, myArgs)); // <!-- 456 -->

