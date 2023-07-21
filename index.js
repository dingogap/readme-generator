// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "Project Title?",
        validate: (answers) => {
            if (answers.length === 0) {
                return console.log('Please enter the Title of your Project');
            } else {
                return true;
            }
        }
    },
    {
        name: "description",
        type: "input",
        message: "Brief Description?",
        validate: (answers) => {
            if (answers.length < 1) {
                return console.log('Please enter a Description for your Project');
            } else {
                return true;
            }
        }
    },
];

// Create file filename & write data to it
// Log errors to console
// Log success to console
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} created successfully`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const data = generateMarkdown(answers);
        const fileName = "./output/README.md";
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
