var Shape;
(function (Shape) {
    var pi = Math.PI;
    function circle(x) {
        return x * x * pi;
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
