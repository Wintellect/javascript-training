
wait()
    .then(function() {
        console.log("Resolved!");
    });

function wait() {
    var deferred = Q.defer();
    deferred.resolve();
    return deferred.promise;
}

