
class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    get area() {
        return this.length * this.width;
    }
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);
var areas = [
    rect1,
    rect2,
    rect3
];