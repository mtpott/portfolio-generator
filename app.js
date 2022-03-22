//var commandLineArgs = process.argv;
//console.log(commandLineArgs);

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);

    console.log('portfolio complete! check out index.html to see the output.');
});