class Shape {
    constructor(shape, shapeColor) {
        this.shapeColor = shapeColor;
        this.shape = shape;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        </svg>`;
}
}

class Triangle extends Shape{
    constructor(shapeColor, shape) {
        super(shapeColor, shape);
        shapeColor= '';
         }
         render() {
            return `<polygon points="150 20, 220 80, 80 180" fill="${this.shapeColor}" />`;
        }
        }


class Logo
{
    constructor(text, shape, shapeColor, textColor)
    {
        this.text = text;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}

//     {
        
//     }
// }
// class Square extends Logo {
//     constructor(shape, shapeColor) {
//         shape = 'square';
//         shapeColor= this.shapeColor;
//     }
//     drawSquare()
//     {
//         return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`;
//     }   
// }
// class Circle extends Logo {
//     constructor(shape, shapeColor) {
//         shape = 'circle';
//         shapeColor= this.shapeColor;
//     }
//     drawCircle()
//     {
//         return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
//     }
// }
// class Text extends Logo {
//     constructor(text, textColor) {
//         text = this.text;
//         textColor= this.textColor;
//     }
//     drawText()
//     {
//         return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
//     }
// }

// function generateLogo ()
//     {

//         if (this.shape == "circle"){
//             drawCircle();
//             drawText();
//         }
//         else if (this.shape == "square"){
//             drawSquare();
//             drawText();
//         }
//         else {this.shape === 'triangle'
//            drawTriangle();
//          drawText();
//         }
//     }
    
// generateLogo();



module.exports = Logo, Shape, Triangle;