
function test() {
    for(var i=1; i<=3; i++) {
        setTimeout(doSomething(i), 10);
    }

    function doSomething(i) {
        return function() {
            console.log(i);
        }
    }
}

test(); // 1 2 3

