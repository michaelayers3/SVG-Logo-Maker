
const Triangle = require('./shapes');

// describe('Circle', () => {
//     it('should return a circle', () => {
//         const shape= 'circle';
//         shape.shapeColor= ("red")
//         expect(new Logo()).toEqual(`<circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />`);
//     })
// });

// describe('drawSquare', () => {
//     it('should return a square', () => {
//         const shape = new drawSquare();
//         shape.shapeColor("green")
//         expect(drawSquare()).toEqual(`<rect width="100%" height="100%" fill="${shape.shapeColor}" />`);
//     })
// });


describe('Triangle', () => {
    const shape = new Triangle();
    shape.shapeColor=("blue");
    expect(shape.render()).toEqual(`<polygon points="150 20, 220 80, 80 180" fill="blue" />`);
});

