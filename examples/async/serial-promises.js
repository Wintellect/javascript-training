
console.time("run");
wait()
    .then(function(v) { return wait(v); })
    .then(function(v) { return wait(v); })
    .then(function(v) { console.timeEnd("run"); /* run: 3000ms */ });

function wait() {
    return Q.delay(1000);
}

