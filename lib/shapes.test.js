
const {Square, Circle, Triangle} = require('./shapes');

test('Circle', () => {
    const circle = new Circle();
    circle.shapeColor=("red");
    expect(circle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`)
});

test('Sqaure', () => {
    const square = new Square();
    square.shapeColor=("green");
    expect(square.render()).toEqual(
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect width="100%" height="100%" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`)
});


test('Triangle', () => {
    const triangle = new Triangle();
    triangle.shapeColor=("blue");
    expect(triangle.render()).toEqual(
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="150 0, 40 150, 250 150" fill="blue"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
    </svg>`)
});

