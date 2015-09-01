
wait(1)
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { return wait(v); })
    .then(function(v) { return v + 1; })
    .then(function(v) { console.log("res:", v); /* not called */ })
    .catch(function(v) { console.log("rej:", v); /* rej: 4 */ });

function wait(v) {
    var deferred = Q.defer();
    if(v === 4) { deferred.reject(v); } else { deferred.resolve(v+1); }
    return deferred.promise;
}

