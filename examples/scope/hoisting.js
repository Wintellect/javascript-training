
function test() {
    console.log(myValue);
    var myValue = 456;
    console.log(myValue);
}

function testActual() {
    var myValue;
    console.log(myValue);
    myValue = 456;
    console.log(myValue);
}

test(); // undefined 456

