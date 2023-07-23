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
    name: "licence",
    type: "list",
    choices: [
      "Apache License 2.0",
      "GNU GPLv3",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "Revised" License',
      "Boost Software License 1.0",
      "Ceative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU GPLv2",
      "GNU Leeser GPL v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
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
