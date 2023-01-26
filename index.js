const fs = require('fs');
const inquirer = require('inquirer');

//title, description, tableOfContents, installation, usage, license, contributing, tests, questions
inquirer
    .prompt(
        [
            {
                type: 'input',
                message: "What's the project title?",
                name: 'title',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What's the project Description?",
                name: 'description',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What Goes In The Installation Section?",
                name: 'installation',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What Goes In The Usage Section?",
                name: 'usage',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'list',
                message: "What Liscense did you use?",
                name: 'license',
                choices: ['MIT License', 'Apache', 'IBM', 'Mozila', 'N/A'],
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What Goes In the Contributing Section?",
                name: 'contributing',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What Goes In The Test Section?",
                name: 'test',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "For the Questions Section Please Provide Your Github Username?",
                name: 'questions',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            }

        ])
    .then(({ title, description, installation, usage, license, contributing, test, questions }) => {
        // Use user feedback 
        var licenseLink = '';
        if (license === 'Apache') {
            licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (license === 'MIT License') {
            licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } else if (license === 'IBM') {
            licenseLink = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        } else if (license === 'Mozila') {
            licenseLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        } else {
            licenseLink = ''
        };
        //title, description, tableOfContents, installation, usage, license, contributing, test, questions
        const createReadMe = () => {
            fs.writeFile('README.md', `# ${title} \n ## Description \n ${description} \n ## Table Of Contents \n - [Title](#title) \n - [Description](#description) \n - [Installation](#installation) \n - [Usage](#usage) \n - [Liscense](#liscense) \n - [Contributing](#contributing) \n - [Test](#test) \n - [Questions](#questions) \n ## Installation \n ${installation} \n ## Usage \n ${usage} \n ## License \n ${license} \n ${licenseLink} \n ## Contributing \n ${contributing} \n ## Tests \n ${test} \n ## Questions \n UserName: ${questions} \n https://github.com/${questions}`, function (err, file) {
                if (err) throw err;
                console.log('File Created & Populated');
            })
        };
        createReadMe();
    })
    .catch((error) => {
        console.log(error)
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error)
        } else {
            // Something else went wrong
            console.log("beats me hoss")
        }
    });



