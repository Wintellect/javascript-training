
var rv = 0;
var deferred = Q.defer();
function wait() {
    deferred.reject(rv += 1);
    console.log("rv", rv);
    return deferred.promise;
}

wait().catch(function(v) { console.log("v", v); });
wait().catch(function(v) { console.log("v", v); });
wait().catch(function(v) { console.log("v", v); });

// rv 1
// rv 2
// rv 3
// v 1
// v 1
// v 1

