class Shape {
    constructor(text,textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        
        }
    }


class Triangle extends Shape{

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        

         }
         render(){
            return  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
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
            return  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect width="100%" height="100%" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        }
        }
class Circle extends Shape {
    constructor(text,  textColor, shapeColor) {
        super(text,  textColor, shapeColor);
        

            }
            render(){
                return  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`;
            }
            }





module.exports = {Circle, Shape, Triangle, Square};