
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getPositionText() {
        return ['[', this.x, ',', this.y, ']'].join("");
    }
}

class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    getSizeText() {
        return ['[', this.width, 'x', this.height, ']'].join("");
    }
}

class Square extends Rectangle {
    constructor(x, y, size) {
        super(x, y, size, size);
        this.size = size;
    }
}

var sq = new Square(10, 20, 40);

console.log(sq instanceof Square); // true
console.log(sq instanceof Rectangle); // true
console.log(sq instanceof Shape); // true

console.log(sq.getPositionText()); // [10,20]
console.log(sq.getSizeText()); // [40x40]

