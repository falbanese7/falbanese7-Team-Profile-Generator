const employee = require('../lib/employee');

describe('Employee constructor function', () => {
    it('Will call a new employee instance', () => {
        const newEmployee = new employee();
        expect(typeof(newEmployee)).toBe("object");
    })
    it('Will be able to add a value to the name property', () => {
        const name = "Emily";
        const newEmployee = new employee(name);
        expect(newEmployee.name).toBe(name);
    })
    it('Will be able to add a value to the id proerty', () => {
        const id = 711;
        const newEmployee = new employee('rando', id);
        expect(newEmployee.id).toBe(id);
    })
    it('Will be able to add a value to the email property', () => {
        const email = "email@example.com";
        const newEmployee = new employee('rando', 7, email);
        expect(newEmployee.email).toBe(email);
    })

    describe('getName() functionality', () => {
        it('Can retrieve the name from user input', () => {
            const name = "Emily";
            const nameVal = new employee(name);
            expect(nameVal.getName()).toBe(name);
        })
    });

    describe('getId() functionality', () => {
        it('Can retrieve the id from user input', () => {
            const id = 711;
            const idVal = new employee('rando', id);
            expect(idVal.getId()).toBe(id);
        })
    });

    describe('getEmail() functionality', () => {
        it('Can retrieve the email from user input', () => {
            const email = "email@example.com";
            const emailVal = new employee('rando', 711, email);
            expect(emailVal.getEmail()).toBe(email);
        })
    });

    describe('getRole() functionality', () => {
        it('Can return the employee role from user input', () => {
            const role = "Employee";
            const employeeRole = new employee('rando', 711, 'email@example.com');
            expect(employeeRole.getRole()).toBe(role);
        })
    });
});