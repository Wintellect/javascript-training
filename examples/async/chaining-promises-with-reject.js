
wait(1)
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { console.log("v:", v); /* not called */ })
    .catch(function() { console.log("Rejected!"); });

function wait(v) {
    var deferred = Q.defer();
    if(v === 4) { deferred.reject(); } else { deferred.resolve(v+1); }
    return deferred.promise;
}

