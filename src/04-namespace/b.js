/// <reference path="./a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.circle(2));
console.log(Shape.square(2));
var circleAlias = Shape.circle;
console.log(circleAlias(2));
