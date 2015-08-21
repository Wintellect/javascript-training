
var myObject = {
    myValue: 123,
    getMyValue: function(prefix, suffix) {
        return [prefix, this.myValue, suffix].join(" ");
    }
};
var otherObject = {
    myValue: 456
};

var test1 = myObject.getMyValue.bind(myObject);
var test2 = myObject.getMyValue.bind(otherObject);
console.log(test1("<!--", "-->")); // <!-- 123 -->
console.log(test2("<!--", "-->")); // <!-- 456 -->

