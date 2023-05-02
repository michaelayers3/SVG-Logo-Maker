class Shape {
    constructor(text, textColor, shapeColor) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
         }
         render(){
            return  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150 20, 220 80, 80 180" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        }
        }
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
         }
         render(){
            return  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        }
        }
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

            }
            render(){
                return  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
            }
            }



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



module.exports = Circle, Shape, Triangle, Square;