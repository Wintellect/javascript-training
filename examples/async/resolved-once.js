
var rv = 0;
var deferred = Q.defer();
function waitFxn() {
    deferred.resolve(rv += 1);
    console.log("rv", rv);
    return deferred.promise;
}

waitFxn().then(function(v) { console.log("v", v); });
waitFxn().then(function(v) { console.log("v", v); });
waitFxn().then(function(v) { console.log("v", v); });

// rv 1
// rv 2
// rv 3
// v 1
// v 1
// v 1

