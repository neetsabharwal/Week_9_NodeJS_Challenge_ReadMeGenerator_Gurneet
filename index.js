// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
let folderName = "";
let { render } = require("mustache");
let template =
  "# {{title}} \n\n ## Description \n {{description}} \n\n ## Technologies \n {{technologies}}";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? ",
  },
  {
    type: "input",
    name: "description",
    message: "Add a brief description. ",
  },
  {
    type: "input",
    name: "usage",
    message: "Add Usage information. ",
  },
  {
    type: "input",
    name: "contribution",
    message: "Contribution guidelines: ",
  },
  {
    name: "test",
    type: "input",
    message: "Test instructions: ",
  },
  {
    name: "email",
    type: "input",
    message: "Email Address:",
  },
  {
    type: "checkbox",
    message: "What technologies have you used?",
    name: "technologies",
    choices: ["HTML", "CSS", "JavaScript", "Node.js", "React", "MySQL"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
      fs.writeFile(`./${folderName}/${fileName}.md`,data, (err) => {
          if(err) 
          throw (err)
        });
    }
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data => { 
    folderName  = `${data.title}`;
    return generateMarkdown(data)})
  .then(data => { return writeToFile('README',data)});
}

// Function call to initialize app
init();
