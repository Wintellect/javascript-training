
var myValue = 123;

function getMyValue() {
    if(myValue) {
        var myValue = 456;
    }
    return myValue;
}

console.log(getMyValue()); // undefined

