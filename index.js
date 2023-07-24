const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const licenseDetails = require("./utils/licenseDetails");

// Build an array of available licenses for the Inquirer Questions
licenseList=Object.keys(licenseDetails())

// Questions used by Inquirer to collect data for the README.md
const questions = [
    {
        name: "title",
        type: "input",
        message: "Project Title?",
        validate: (answers) => {
            if (answers.length === 0) {
                return console.log("Please enter the Title of your Project");
            } else {
                return true;
            }
        },
    },
    {
        name: "description",
        type: "input",
        message: "Brief Description?",
        validate: (answers) => {
            if (answers.length < 1) {
                return console.log("Please enter a Description for your Project");
            } else {
                return true;
            }
        },
    },
    {
        name: "installation",
        type: "input",
        message: "Installation Instructions?",
    },
    {
        name: "usage",
        type: "input",
        message: "Usage Information",
    },
    {
        name: "license",
        type: "list",
        choices: licenseList,
        message: "License Information?",
    },
    {
        name: "contributing",
        type: "input",
        message: "Contribution Guidelines?",
    },
    {
        name: "tests",
        type: "input",
        message: "Test Instructions?",
    },
    {
        name: "questions",
        type: "input",
        message: "How to ask Questions and get more information",
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

// Intialise Processing
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            return generateMarkdown(answers);
        })
        .then((data) => {
            const fileName = "./output/README.md";
            writeToFile(fileName, data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
