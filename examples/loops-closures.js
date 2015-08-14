
function test() {
    for(var i=1; i<=3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10);
    }
}

test(); // 4 4 4

