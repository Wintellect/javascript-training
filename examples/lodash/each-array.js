
var myArray = [1, 1, 2, 3, 5, 8, 13, 21];

_.each(myArray, function(value, index) {
    console.log("[%d] %s", index, value);
});

// [0] 1
// [1] 1
// [2] 2
// [3] 3
// [4] 5
// [5] 8
// [6] 13
// [7] 21

