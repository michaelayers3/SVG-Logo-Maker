//Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/shapes.js');


//Ask for user input 
function init() 
{
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
                choices: ['circle', 'square', 'triangle']
        },
        {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like your shape to be? (enter a hex value)'
        },
        {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like your text to be? (enter a hex value)'
        },
    ])
    
    .then((response) =>
         fs.writeFile('logo.svg', new Logo(
            response.text,
            response.shape,
            response.shapeColor,
            response.textColor,
        ).generateLogo()),
            (err) => 
            err ? console.error(err) : console.log('Check out your new logo!')
    );
};

init();
    

//Create a function to render SVG

 