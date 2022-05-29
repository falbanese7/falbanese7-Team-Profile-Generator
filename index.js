const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const addCardToPage = require('./src/renderHTML');
const teamArr = [];

const theManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the team manager?',
            name: 'name',
            validate: function(nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the id of your team manager?',
            name: 'id',
            validate: function (idInput) {
                if (isNaN(idInput)) {
                    return false;
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            message: 'What is the email of your team manager?',
            name: 'email',
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type:'input',
            message:`What is the manager's office number?`,
            name: 'officeNumber',
            validate: function (numInput) {
                if (isNaN(numInput)) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const newManager = new manager(name, id, email, officeNumber);
        teamArr.push(newManager);
    })
};

const engineerOrIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of an employee on this team?',
            name: 'name',
            validate: function(nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: `What is the employee's role?`,
            choices: ['Engineer', 'Intern'],
            name:'role'
        },
        {
            type: 'input',
            message: `What is this employee's ID?`,
            name: 'id',
            validate: function (idInput) {
                if (isNaN(idInput)) {
                    return false;
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            message: `What is this employee's GitHub username?`,
            name: 'github',
            when: (input) => input.role === 'Engineer',
            validate: function(userInput) {
                if (userInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: `What is the name of the school this intern attends?`,
            name: 'school',
            when: (input) => input.role === 'Intern',
            validate: function(userInput) {
                if (userInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: `What is this employee's email address?`,
            name: 'email',
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            message: 'Would you like to add another employee card?',
            default: false,
            name: 'newcard'
        }
    ])
    .then(employeeInfo => {

        let {name, id, role, email, github, school, newcard} = employeeInfo;
        let employee;

        if (role === "Engineer") {
            employee = new engineer(name, id, email, github);
        } else if (role === "Intern") {
            employee = new intern(name, id, email, school);
        } 
        teamArr.push(employee);

        if (newcard) {
            return engineerOrIntern(teamArr);
        } else {
            return teamArr;
        }
    });
}


// const newEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             message: 'What is the name of your team member?',
//             name: 'name',
//             validate: function(nameInput) {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'list',
//             message: 'What is their role?',
//             choices: ['Manager', 'Engineer', 'Intern'],
//             name: 'role'
//         },
//         {
//             type: 'input',
//             message: 'What is the id of your team member?',
//             name: 'id',
//             validate: function (idInput) {
//                 if (isNaN(idInput)) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//             },
//         },
//         {
//             type: 'input',
//             message: 'What is the email of your team member?',
//             name: 'email',
//             validate: function (email) {
  
//                 valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
//                 if (valid) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             },
//         }
//     ])
//     .then(function({name, role, id, email}) {
//         let roleProp = '';
//         if (role === 'Engineer') {
//             roleProp = 'GitHub Profile';
//         } else if (role === 'Intern') {
//             roleProp = 'Name of School';
//         } else {
//             roleProp = 'Office Number'
//         }
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 message: `What is this team member's ${roleProp}?`,
//                 name: 'rolePropVal'
//             },
//             {
//                 type: 'List',
//                 message: 'Would you like to create another team member card?',
//                 choices: ['Yes', 'No'],
//                 name: 'newcard'
//             }
//         ])
//         .then(employeeInfo => {

//             let {name, id, role, email, rolePropVal, newcard} = employeeInfo;
//             let employee;

//             if (role === "Engineer") {
//                 employee = new engineer(name, id, email, rolePropVal);
//             } else if (role === "Intern") {
//                 employee = new intern(name, id, email, rolePropVal);
//             } else {
//                 employee = new manager(name, id, email, rolePropVal);
//             }
//             teamArr.push(employee);

//             if (newcard) {
//                 return newEmployee(teamArr);
//             } else {
//                 return teamArr;
//             }
//         });
//     });

// };


const writeFile = info => {
    fs.writeFile('./dist/team-profile.html', info, err => {
        
        if (err) {
            console.info(err);
            return;
        } else {
            console.info('Successfully wrote to team-profile.html file')
        }
    })
};

theManager()
.then(engineerOrIntern)
.then(teamArr => {
    return addCardToPage(teamArr);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.info(err);
})

// const init = () => {
//     newEmployee()
//       .then((data) => fs.writeFile('./dist/team-profile.html', addCardToPage(data)))
//       .then(() => console.log('Successfully wrote to team-profile.html file'))
//       .catch((err) => console.error(err));
//   };

// // Function call to initialize app
// init();