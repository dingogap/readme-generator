// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// Create file filename & write data to it
// Log errors to console
// Log success to console 
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} created successfully`);
        }
    })
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
const fileName = './output/README.md'
writeToFile(fileName, '# README Generator'+"\n")