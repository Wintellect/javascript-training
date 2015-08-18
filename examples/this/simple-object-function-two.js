
var myObject = {
    myValue: 123,
    getMyValue: function() {
        return this.myValue;
    },
    tryConsole: function() {
        this.console.log("hello");
    }
};

var tryConsole = myObject.tryConsole;
tryConsole(); // hello

