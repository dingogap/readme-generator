# README Generator

[![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This README produces a standardised and repeatable method of creating a quality README.md file. It is a CLI application devewloped using node.js. The Application uses Inquirer to ask a series of questions and uses the answers to build the README.md file.

## Video Demonstrating working application
Click the link to view the [Demonstration Video][def1]

![Demonstration Video](assets/video/readMeDemo.gif)

## Navigation

Navigation is very simple. Using the CLI, change to the project directory. Run node index.js and answer the questions when prompted. The program will use the answers to build the README.md file which will be written in the output folder. The Demonstration Video shows how the application should be used.

## Data
License Names, Badges and Links are stored in an object in the licenseDetails.js file. If licences are added or removed only this modules needs to be changed.

The markdownGenerator code has been written to avoid code changes if Inquirer Prompts are added or removed at some time in the future. 


## Resources Used
1. Bootcamp Materials - Lesson Material from Weeks 1 - 9
2. Prior knowledge and experience
3. Group tutorial sessions
4. [Inquirer.js][def2] Documentation
5. [Shields.io][def3] Documentation



[def1]: https://github.com/dingogap/readme-generator/blob/main/assets/video/readMeDemo.mp4
[def2]: https://www.npmjs.com/package/inquirer
[def3]: https://shields.io/docs

