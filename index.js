// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the Project Name?",
        name: "title",
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
