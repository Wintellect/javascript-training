
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
console.log(test.call(myObject, "<!--", "-->")); // <!-- 123 -->
console.log(test.call(otherObject, "<!--", "-->")); // <!-- 456 -->

