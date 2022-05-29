const intern = require('../lib/intern');

describe('Intern constructor function', () => {
    it('Will be able to add a value to the school property', () => {
        const schoolName = 'Emmanuel College';
        const newSchool = new intern('rando', 711, 'email@example.com', schoolName);
        expect(newSchool.school).toBe(schoolName);
    })
    describe('getSchool() functionality', () => {
        it('Can retrieve the school name from user input', () => {
            const schoolName = 'Emmanuel College';
            const newSchool = new intern('rando', 711, 'email@example.com', schoolName);
            expect(newSchool.getSchool()).toBe(schoolName);
        })
    });
    describe('getRole() functionality', () => {
        it('Can return the intern role from user input', () => {
            const role = "Intern";
            const employeeRole = new intern('rando', 711, 'email@example.com', 'Emmanuel College');
            expect(employeeRole.getRole()).toBe(role);
        })
    });
});