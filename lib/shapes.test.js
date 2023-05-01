
const {drawCircle, drawSquare, drawTriangle, drawText, generateLogo} = require('./shapes');

describe('drawCircle', () => {
    it('should return a circle', () => {
        const shape= new drawCircle();
        shape.shapeColor("red")
        expect(drawCircle()).toEqual(`<circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />`);
    })
});

describe('drawSquare', () => {
    it('should return a square', () => {
        const shape = new drawSquare();
        shape.shapeColor("green")
        expect(drawSquare()).toEqual(`<rect width="100%" height="100%" fill="${shape.shapeColor}" />`);
    })
});

describe('drawTriangle', () => {
    const shape = new drawTriangle();
    shape.shapeColor("blue")
    it('should return a triangle', () => {
        expect(drawTriangle()).toEqual(`<polygon points="150 20, 220 80, 80 180" fill="${shape.shapeColor}" />`);
    })
});

