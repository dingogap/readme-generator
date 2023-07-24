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
        message: "Enter the Title of your Project:",
        validate: (answers) => {
            if (answers.length === 0) {
                return console.log("Please enter the Title of your Project:");
            } else {
                return true;
            }
        },
    },
    {
        name: "description",
        type: "input",
        message: "Give a Description of your Project:?",
        validate: (answers) => {
            if (answers.length ===0) {
                return console.log("Please give a Description for your Project:");
            } else {
                return true;
            }
        },
    },
    {
        name: "installation",
        type: "input",
        message: "Enter any Installation Instructions:",
    },
    {
        name: "usage",
        type: "input",
        message: "Please enter information and instruction showing how to use this Project:",
    },
    {
        name: "license",
        type: "list",
        choices: licenseList,
        message: "Choose a License from the Lience List - if unlicensed choose 'No License Required':",
    },
    {
        name: "contributing",
        type: "input",
        message: "Enter information advising how to contribute to this Project:",
    },
    {
        name: "tests",
        type: "input",
        message: "Enter details of any Test Procedures to confirm Project functionality:",
    },
    {
        name: "userName",
        type: "input",
        message: "Please enter your GitHub UserName:",
        validate: (answers) => {
            if (answers.length === 0) {
                return console.log("Please enter your GitHub UserName:");
            } else {
                return true;
            }
        },
    },
    {
        name: "email",
        type: "input",
        message: "Please enter your email address:",
        validate: (answers) => {
            if (answers.length === 0) {
                return console.log("Please enter your email address:");
            } else {
                return true;
            }
        },
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
