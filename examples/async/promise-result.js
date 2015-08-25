
wait()
    .then(function(result) {
        console.log(result); // { value: true }
    });

function wait() {
    var deferred = Q.defer();
    deferred.resolve({ value: true });
    return deferred.promise;
}

