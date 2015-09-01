wait(1).then(function(v) {
    wait(v).then(function(v) {
        v = v + 1;
        wait(v).then(function(v) {
            v = v + 1;
            console.log("res:", v); // res: 6
        }).catch(function(v) {
            console.log("rej:", v); /* not called */
        });
    });
});
function wait(v) {
    var deferred = Q.defer();
    deferred.resolve(v + 1);
    return deferred.promise;
}