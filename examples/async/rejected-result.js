
wait()
    .then(function(result) {
        console.log(result); // ... Not called
    })
    .catch(function(result) {
        console.log(result); // { value: false }
    });

function wait() {
    var deferred = Q.defer();
    deferred.reject({ value: false });
    return deferred.promise;
}

