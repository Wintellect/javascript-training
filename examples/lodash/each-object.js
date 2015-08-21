
var myObject = { a: 1, b: 2, c: 3 };

_.each(myObject, function(value, key) {
    console.log("%s: %s", key, value);
});

// a: 1
// b: 2
// c: 3
