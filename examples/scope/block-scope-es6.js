
var myValue = 123;

function getMyValue() {
    if(myValue) {
        let myValue = 456;
    }
    return myValue;
}

console.log(getMyValue()); // 123

