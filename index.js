// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// License Details
const licenses = {
    Apache_2: {
        name: 'Apache 2.0',
        badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        license: 'https://opensource.org/licenses/Apache-2.0'
    },
    GPLv2: {
        name: 'GNU GPLv2',
        badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg)',
        license: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    },
    GPLv3: {
        name: 'GNU GPLv3',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        license: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    MIT: {
        name: 'MIT License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        license: 'https://opensource.org/licenses/MIT'
    },
    BSD2: {
        name: 'BSD 2-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
        license: 'https://opensource.org/licenses/BSD-2-Clause'
    },
    BSD3: {
        name: 'BSD 3-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD_3--Clause-orange.svg',
        license: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    Boost_1: {
        name: 'Boost Software License 1.0',
        badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
        license: 'https://www.boost.org/LICENSE_1_0.txt'
    },
    CC0_1: {
        name: 'Creative Commons 1.0',
        badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
        license: 'http://creativecommons.org/publicdomain/zero/1.0/'
    },
    EPL_1: {
        name: 'Eclipse Public License 1.0',
        badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
        license: 'https://opensource.org/licenses/EPL-1.0'
    },
    MPL_2: {
        name: 'Mozilla Public License 2.0',
        badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
        license: 'https://opensource.org/licenses/MPL-2.0'
    },
    Unlicense: {
        name: 'The Unlicense',
        badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
        license: 'http://unlicense.org/'
    },
}

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
        name: "licence",
        type: "list",
        choices: [
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
