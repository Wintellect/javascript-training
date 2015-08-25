
wait()
    .then(function() {
        console.log("Resolved!");
    })
    .catch(function() {
        console.log("Rejected!");
    });

function wait() {
    var deferred = Q.defer();
    deferred.reject();
    return deferred.promise;
}

