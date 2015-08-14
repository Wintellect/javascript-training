
var myGlobalVar = 123;

function myFunction1() {

    var myLocalVarOne = 456;
    myFunction2();

    function myFunction2() {
        var myLocalVarTwo = 789;
        console.log(myGlobalVar, myLocalVarOne, myLocalVarTwo);
    }
}

myFunction1(); // 123 456 789

