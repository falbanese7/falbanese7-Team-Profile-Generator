const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const htmlGenerator = require('./src/renderHTML');
const renderHTML = require('./src/renderHTML');
const teamArr = [];


const newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your team member?',
            name: 'name'
        },
        {
            type: 'list',
            message: 'What is their role?',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is the id of your team member?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the email of your team member?',
            name: 'email'
        }
    ])
    .then(function({name, role, id, email}) {
        let roleProp = '';
        if (role === 'Engineer') {
            roleProp = 'GitHub Profile';
        } else if (role === 'Intern') {
            roleProp = 'Name of School';
        } else {
            roleProp = 'Office Number'
        }
        inquirer.prompt([
            {
                type: 'input',
                message: `What is this team member's ${roleProp}?`,
                name: 'roleProp'
            },
            {
                type: 'List',
                message: 'Would you like to create another team member card?',
                choices: ['Yes', 'No'],
                name: 'newcard'
            }
        ])
        .then(function({roleProp, newcard}) {
            let nextEmployee;
            if (role === 'Engineer') {
                nextEmployee = new engineer(name, id, email, roleProp);
            } else if (role === 'Intern') {
                nextEmployee = new intern(name, id, email, roleProp);
            } else {
                nextEmployee = new manager(name, id, email, roleProp);
            }
            teamArr.push(newcard);
            renderHTML(newcard)
            .then(function() {
                if (newcard === 'Yes'){
                    newEmployee();
                } else {
                    return;
                }
            })
        });
    });

};

const init = () => {
    newEmployee()
      .then((data) => fs.writeFileSync('./dist/team-profile.html', htmlGenerator.renderHTML(data)))
      .then(() => console.log('Successfully wrote to teamProf.html file'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();