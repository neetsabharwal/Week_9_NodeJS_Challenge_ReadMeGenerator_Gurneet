// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
let {render} = require('mustache');
let template = "# {{title}} \n\n ## Description \n {{description}} \n\n ## Technologies \n {{technologies}}";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Add a brief description.",
      },
      {
        type: "checkbox",
        message: "What technologies have you used?",
        name: "technologies",
        choices: ["HTML", "CSS", "JavaScript", "MySQL"],
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let output = render(template,data);
    fs.writeFileSync(`./projectfiles/${fileName}.md`,output);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile('README',data));
}

// Function call to initialize app
init();
