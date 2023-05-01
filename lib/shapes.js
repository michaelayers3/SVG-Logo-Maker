class Logo
{
    constructor(text, shape, shapeColor, textColor)
    {
        this.text = text;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }

    drawCircle()
    {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }

    drawSquare()
    {
        return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`;
    }

    drawTriangle()
    {
        return `<polygon points="150 20, 220 80, 80 180" fill="${this.shapeColor}" />`;
    }

    drawText()
    {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    generateLogo()
    {
        if (this.shape == "circle"){
            this.drawCircle();
            this.drawText();
        }
        else if (this.shape == "square"){
            this.drawSquare();
            this.drawText();
        }
        else {
            this.drawTriangle();
            this.drawText();
        }
      
}};

module.exports = Logo