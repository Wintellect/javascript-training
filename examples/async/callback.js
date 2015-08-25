
var v = "Not Yet!";
setTimeout(myCallBack, 0);
console.log(v);

function myCallBack() {
    v = "Now!";
    console.log(v);
}

