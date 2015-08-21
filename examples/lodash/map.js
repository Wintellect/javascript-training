
var data = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

var result = _.map(data, function(v) {
    return { dataId: v.id, text: v.id.toString() };
});
console.log(result);

// [ { dataId: 1, text: '1' },
//   { dataId: 2, text: '2' },
//   { dataId: 3, text: '3' } ]

