// Declaring a const variable to pull in
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
    fs.writeFile(
      "README.md",
      `# Title:\n${JSON.stringify(
        response.Title
      )}\n\n# Table of Contents:\n${JSON.stringify(
        response.contents
      )}\n\n# Description:\n${JSON.stringify(
        response.Description
      )}\n\n# Installations:\n${JSON.stringify(
        response.installations
      )}\n\n# Usage Information:\n${JSON.stringify(
        response.usage
      )}\n\n# Licenses:\n${JSON.stringify(
        response.license
      )}\n\n# Contribution Guidelines:\n${JSON.stringify(
        response.contributing
      )}\n\n# Test Instructions:\n${JSON.stringify(
        response.tests
      )}\n\n# Questions:\nhttps://github.com/${
        response.githubinfo
      }\nIf you have specific questions please contact the primary developer at:${JSON.stringify(
        response.contactinfo
      )}`,
      (err) => (err ? console.error(err) : console.log("Success!")),
      console.log(response)
    )
  );
