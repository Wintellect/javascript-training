
var v = "Not Yet!";
wait()
    .then(function() {
        v = "Now!";
        console.log(v);
    });
console.log(v);

function wait() {
    var deferred = Q.defer();
    setTimeout(deferred.resolve, 0);
    return deferred.promise;
}

