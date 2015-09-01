
var rv = 0;
var deferred = Q.defer();
function waitFxn() {
    deferred.reject(rv += 1);
    console.log("rv", rv);
    return deferred.promise;
}

waitFxn().catch(function(v) { console.log("v", v); });
waitFxn().catch(function(v) { console.log("v", v); });
waitFxn().catch(function(v) { console.log("v", v); });

// rv 1
// rv 2
// rv 3
// v 1
// v 1
// v 1

