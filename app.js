
const inquirer = require('inquirer');
const { trimEnd } = require('lodash');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw err;

//     console.log('portfolio complete! check out index.html to see the output.');
// });


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github username (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('please enter your github username');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'would you like to enter some information about yourself for an "about" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    =================
    add a new project
    =================
    `);
    //if there's no 'projects array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your project? (required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('please enter the name of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the project (required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('please enter a description for your project');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'what did you build this project with? check all that apply',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'enter the github link to your project (required)',
            validate: projectLink => {
                if (projectLink) {
                    return true;
                } else {
                    console.log('please enter the link for your project');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

    promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });