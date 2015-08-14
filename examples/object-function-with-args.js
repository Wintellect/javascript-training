
var myObject = {
    myValue: 123,
    getMyValue: function(prefix, suffix) {
        return [prefix, this.myValue, suffix].join(" ");
    }
};

console.log(myObject.getMyValue("<!--", "-->")); // <!-- 123 -->

