
function addSuffix(suffix) {
    return function(text) {
        return text + " " + suffix;
    };
}

var addPhD = addSuffix("PhD");
var addMasters = addSuffix("M.A.");

console.log(addPhD("Jane Smith")); // Jane Smith PhD
console.log(addMasters("Bob Smith")); // Bob Smith M.A.

