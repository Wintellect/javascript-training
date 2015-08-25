
wait()
    .then(function() {
        throw new Error("Something bad happened!");
    }, function() {
        console.log("Rejected!");
    });

function wait() {
    var deferred = Q.defer();
    deferred.resolve();
    return deferred.promise;
}

