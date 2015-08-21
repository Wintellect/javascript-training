
var data = [ 'bob', 'ted', 'ann', 'sue', 'ned' ];

var result = _(data)
    .map(function(v) { return { name: _.capitalize(v) }})
    .sortBy(function(v) { return v.name; })
    .reverse()
    .value();
console.log(result);

// [ { name: 'Ted' },
//   { name: 'Sue' },
//   { name: 'Ned' },
//   { name: 'Bob' },
//   { name: 'Ann' } ]

