// Declaring a const variable to pull in
const inquirer = require("inquirer");
const fs = require("fs");
// inquirer method for prompt user questions via the command line terminal
inquirer
  .prompt([
    // question for project title
    {
      type: "input",
      message: "What is your project Title?",
      name: "Title",
    },
    // question for description details
    {
      type: "input",
      message: "Provide a description of your project?",
      name: "Description",
    },
    // question for installation details
    {
      type: "input",
      message: "What are you installations?",
      name: "installations",
    },
    // question for how to use application
    {
      type: "input",
      message: "How is this application used?",
      name: "usage",
    },
    // question for license details
    {
      type: "list",
      message: "What kind of Licensing was required?",
      name: "license",
      choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
    },
    // question to get all project contributors
    {
      type: "input",
      message: "Other Contributors?",
      name: "contributing",
    },
    // question to get testing type details
    {
      type: "input",
      message: "Required tests?",
      name: "tests",
    },
    // question to gather github user details for profile link
    {
      type: "input",
      message: "What is your GitHub profile?",
      name: "githubinfo",
    },
    // question to gather email contact details
    {
      type: "input",
      message: "What is your email?",
      name: "contactinfo",
    },
    // chaining on dot then response to capture user input from command line terminal
  ])
  .then((response) =>
    // invoking write file method with file type ".md" with details to inject user input from the command line in the desired sectoins of the .md file
    fs.writeFile(
      "README.md",
      `# Title:\n${JSON.stringify(
        response.Title
      )}\n\n# Table of Contents:\n[Description](#description)\n\n[Installations](#installations)\n\n[Usage Information](#usage-information)\n\n[Licenses](#licenses)\n\n[Contribution Guidelines](#contribution-guidelines)\n\n[Test Instructions](#test-instructions)\n\n[Questions](#questions)\n\n# Description:\n${JSON.stringify(
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
      }\n\nIf you have specific questions please contact the primary developer at: ${JSON.stringify(
        response.contactinfo
      )}`,
      // error handling and success message to advise commandline user of error or succes
      (err) => (err ? console.error(err) : console.log("Success!")),
      console.log(response)
    )
  );
