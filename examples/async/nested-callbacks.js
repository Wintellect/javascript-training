
var count = 0;

setTimeout(function() {
    count += 1;
    setTimeout(function() {
        count += 1;
        setTimeout(function() {
            count += 1;
            console.log("Count:", count); // Count: 3
        });
    });
});

console.log("Count:", count); // Count: 0

