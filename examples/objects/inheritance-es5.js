
function Shape(x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.getPositionText = function() {
    return ['[', this.x, ',', this.y, ']'].join("");
};

function Rectangle(x, y, width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}
Rectangle.prototype = new Shape();
Rectangle.prototype.getSizeText = function() {
    return ['[', this.width, 'x', this.height, ']'].join("");
};

function Square(x, y, size) {
    Rectangle.call(this, x, y, size, size);
    this.size = size;
}
Square.prototype = new Rectangle();

var sq = new Square(10, 20, 40);

console.log(sq instanceof Square); // true
console.log(sq instanceof Rectangle); // true
console.log(sq instanceof Shape); // true

console.log(sq.getPositionText()); // [10,20]
console.log(sq.getSizeText()); // [40x40]

