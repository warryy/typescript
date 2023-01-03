/// <reference path="./a.ts" />

namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

console.log(Shape.circle(2))
console.log(Shape.square(2))

import circleAlias = Shape.circle
console.log(circleAlias(2))