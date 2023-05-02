//Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Triangle, Square, Circle} = require('./lib/shapes.js');




//Ask for user input 
console.log("Let's make you a rad logo!");
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like to use? (up to 3 characters)',
            validate: textInput => {
                if (textInput && textInput.length <= 3) {
                    return true;
                } else {
                    console.log('Please enter up to 3 characters.');
                    return false;
                }}
        },
        {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to use?',
                choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be? (enter a hex value)'
         },
        {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like your shape to be? (enter a hex value)'
        },
      
    ])
    
    .then(function(response){
        if (response.shape === 'circle') {
            const circle = new Circle(
                response.text,
                response.textColor,
                response.shapeColor,
            );
         fs.writeFile('./examples/logo.svg', circle.render(), function(err){
            if (err) throw err;
            console.log('Generated logo.svg!');
        }
         )}
        else if (response.shape === 'square') {
            const square = new Square(
                response.text,
                response.textColor,
                response.shapeColor,
            );
            fs.writeFile('./examples/logo.svg', square.render(), function(err){
                if (err) throw err;
                console.log('Generated logo.svg!');
            }
            )}
            else if (response.shape === 'triangle')
            {
                const triangle = new Triangle(
                    response.text,
                    response.textColor,
                    response.shapeColor,
                );
                fs.writeFile('./examples/logo.svg', triangle.render(), function(err){
                    if (err) throw err;
                    console.log('Generated logo.svg!');
                }
                )}
        });

