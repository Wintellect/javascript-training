'use strict';

var _get = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
        var object = _x, property = _x2, receiver = _x3;
        desc = parent = getter = undefined;
        _again = false;
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
                return undefined;
            } else {
                _x = parent;
                _x2 = property;
                _x3 = receiver;
                _again = true;
                continue _function;
            }
        } else if ('value' in desc) {
            return desc.value;
        } else {
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return getter.call(receiver);
        }
    }
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var Shape = (function () {
    function Shape(x, y) {
        _classCallCheck(this, Shape);

        this.x = x;
        this.y = y;
    }

    _createClass(Shape, [{
        key: 'getPositionText',
        value: function getPositionText() {
            return ['[', this.x, ',', this.y, ']'].join("");
        }
    }]);

    return Shape;
})();

var Rectangle = (function (_Shape) {
    _inherits(Rectangle, _Shape);

    function Rectangle(x, y, width, height) {
        _classCallCheck(this, Rectangle);

        _get(Object.getPrototypeOf(Rectangle.prototype), 'constructor', this).call(this, x, y);
        this.width = width;
        this.height = height;
    }

    _createClass(Rectangle, [{
        key: 'getSizeText',
        value: function getSizeText() {
            return ['[', this.width, 'x', this.height, ']'].join("");
        }
    }]);

    return Rectangle;
})(Shape);

var Square = (function (_Rectangle) {
    _inherits(Square, _Rectangle);

    function Square(x, y, size) {
        _classCallCheck(this, Square);

        _get(Object.getPrototypeOf(Square.prototype), 'constructor', this).call(this, x, y, size, size);
        this.size = size;
    }

    return Square;
})(Rectangle);

var sq = new Square(10, 20, 40);

console.log(sq instanceof Square); // true
console.log(sq instanceof Rectangle); // true
console.log(sq instanceof Shape); // true

console.log(sq.getPositionText()); // [10,20]
console.log(sq.getSizeText()); // [40x40]

