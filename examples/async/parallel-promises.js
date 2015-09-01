
console.time("run");
Q.all([
    wait(),
    wait(),
    wait()
]).then(function(v) {
    console.timeEnd("run"); /* run: 1000ms */
});

function wait() {
    return Q.delay(1000);
}

