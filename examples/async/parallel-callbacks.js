
var didFirst = false;
var didSecond = false;

setTimeout(function() { didFirst = true; checkForBothDone(); }, 0);
setTimeout(function() { didSecond = true; checkForBothDone(); }, 0);

function checkForBothDone() {
    if(didFirst && didSecond) {
        console.log("Finished!");
    }
}

