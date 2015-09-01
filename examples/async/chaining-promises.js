
wait(1)
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { console.log("res:", v); /* res: 6 */ })
    .catch(function(v) { console.log("rej:", v); /* not called */ });

function wait(v) {
    var deferred = Q.defer();
    deferred.resolve(v + 1);
    return deferred.promise;
}

