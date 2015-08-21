
var data = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

var result = _.filter(data, function(v) {
    return v.id % 2 === 1; // Only odd id values
});
console.log(result);

// [ { id: 1 }, { id: 3 } ]

