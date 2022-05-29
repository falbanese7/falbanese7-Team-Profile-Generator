const engineer = require('../lib/engineer');

describe('Engineer constructor function', () => {
    it('Will be able to add a value to the github property', () => {
        const gitURL = 'https://github.com/falbanese7';
        const gitAdd = new engineer('rando', 711, 'email@example.com', gitURL);
        expect(gitAdd.github).toBe(gitURL);
    })
    describe('getGithub() functionality', () => {
        it('Can retrieve the github URL from user input', () => {
            const git = "https://github.com/falbanese7";
            const gitVal = new engineer('rando', 711, 'email@example.com', git);
            expect(gitVal.getGithub()).toBe(git);
        })
    });
    describe('getRole() functionality', () => {
        it('Can return the engineer role from user input', () => {
            const role = "Engineer";
            const employeeRole = new engineer('rando', 711, 'email@example.com', 'GitHubURL');
            expect(employeeRole.getRole()).toBe(role);
        })
    });
});