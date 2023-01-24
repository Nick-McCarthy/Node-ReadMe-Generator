var fs = require('fs');

var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;


const readMe = (title, description, tableOfContents, installation, usage, license, contributing, tests, questions) => {
    fs.open('README.md', '# ${title}', function (err, file) {
        if (err) throw err;
        console.log('File Created & Title Added');
        });
    fs.appendFile('README.md', '## Description \r\n ${description}', function (err) {
        if (err) throw err;
        console.log('Updated Description');
        });
    fs.appendFile('README.md', '## Table Of Contents \r\n ${tableOfContents}', function (err) {
        if (err) throw err;
        console.log('Updated Table Of Contents');
        });
    fs.appendFile('README.md', '## Installation \r\n ${installation}', function (err) {
        if (err) throw err;
        console.log('Updated Installation');
        });
    fs.appendFile('README.md', '## Usage\r\n ${usage}', function (err) {
        if (err) throw err;
        console.log('Updated Usage');
        });
    fs.appendFile('README.md', '## License \r\n ${license}', function (err) {
        if (err) throw err;
        console.log('Updated License');
        });
    fs.appendFile('README.md', '## Contributing \r\n ${contributing}', function (err) {
        if (err) throw err;
        console.log('Updated Contributing');
        });
    fs.appendFile('README.md', '## Tests \r\n ${tests}', function (err) {
        if (err) throw err;
        console.log('Updated Tests');
        });
    fs.appendFile('README.md', '## Questions \r\n ${questions}', function (err) {
        if (err) throw err;
        console.log('Updated Questions');
        });
}


//title of repository, description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions