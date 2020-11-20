const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project Title?",
      name: "Title",
    },
    {
      type: "input",
      message: "Provide a description of your project?",
      name: "Description",
    },
    {
      type: "input",
      message: "table of contents?",
      name: "contents",
    },
    {
      type: "input",
      message: "table of contents?",
      name: "contents",
    },
    {
      type: "input",
      message: "What are you installations?",
      name: "installations",
    },
    {
      type: "input",
      message: "How is this application used?",
      name: "usage",
    },
    {
      type: "input",
      message: "Required Licensing?",
      name: "license",
    },
    {
      type: "input",
      message: "Other Contributors?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Required tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "Additional questions?",
      name: "questions",
    },
    {
      type: "input",
      message: "What is your GitHub profile?",
      name: "githubinfo",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "contactinfo",
    },
  ])
  .then((response) =>
    fs.writeFile("README.md", `${JSON.stringify(process.argv[2])}`, (err) =>
      err ? console.error(err) : console.log("message")
    )
  );
