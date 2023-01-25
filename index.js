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
                message: "What's the project Installation Section?",
                name: 'installation',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What's the project Usage Section?",
                name: 'usage',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'list',
                message: "What Liscense did you use?",
                name: 'title',
                choices: ['The MIT License', null],
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What's the project Liscense Section?",
                name: 'contributing',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What's the project Test Section?",
                name: 'test',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            },
            {
                type: 'input',
                message: "What's the project Questions Section?",
                name: 'questions',
                validate: (value) => { if (value) { return true } else { return "Please input a value" } },
            }

        ])
    .then(({ title, description, installation, usage, license, contributing, test, questions }) => {
        // Use user feedback 
        //title, description, tableOfContents, installation, usage, license, contributing, test, questions
        const createReadMe = () => {
            fs.writeFile('README.md', `# ${title} \n ## Description \n ${description} \n ## Table Of Contents \n ${tableOfContents} \n ## Installation \n ${installation} \n ## Usage \n ${usage} \n ${license ? `## License \n ${license}` : null} \n ## Contributing \n ${contributing} \n ## Tests \n ${test} \n ## Questions \n ${questions}`, function (err, file) {
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



