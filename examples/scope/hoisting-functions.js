
function getMyValue() {
    var getValue = function() {
        return 123;
    };

    return getValue();

    function getValue() {
        return 456;
    }
}

console.log(getMyValue()); // 123

