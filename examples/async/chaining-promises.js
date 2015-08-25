
wait(1)
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { console.log("v:", v); /* 6 */ })
    .catch(function() { console.log("Rejected!"); });

function wait(v) {
    var deferred = Q.defer();
    deferred.resolve(v + 1);
    return deferred.promise;
}

