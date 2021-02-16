// Included packages needed for this application
const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown");
const fs = require('fs');

// Questions for user input
const questions = ["What's your GitHub username?", "What's your email address?", "What's the title of your project?", "Enter a description of your project", "How do users install your project?", "How do users use your project?", "List the contributor information", "Tell us how to test your project", "What licence does your project use?","What's the link to your GitHub profile?"];

// Function to write a physical README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, markdown(data), (err) =>
      err ? console.error(err) : console.log('Readme file generated!'));
}

// Function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'githubLink',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contributors',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'testing',
        },
        {
            type: 'list',
            message: questions[8],
            name: 'license',
            choices: ['MIT', 'Creative Commons', 'GPL', 'Other'],
        }
    ])
    .then((data) =>
    writeToFile("README.md", data)
    );
}

// Function call to initialize app
init();
