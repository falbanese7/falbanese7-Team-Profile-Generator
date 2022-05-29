const manager = require('../lib/manager');

describe('Manager constructor function', () => {
    it('Will be able to add a value to the office number property', () => {
        const offNum = 117;
        const office = new manager('rando', 711, 'email@example.com', offNum);
        expect(office.officeNumber).toBe(offNum);
    })
    describe('getOfficeNumber() functionality', () => {
        it('Can retrieve the office number from user input', () => {
            const offNum = 117;
            const office = new manager('rando', 711, 'email@example.com', offNum);
            expect(office.getOfficeNumber()).toBe(offNum);
        })
    });
    describe('getRole() functionality', () => {
        it('Can return the manager role from user input', () => {
            const role = "Manager";
            const employeeRole = new manager('rando', 711, 'email@example.com', 117);
            expect(employeeRole.getRole()).toBe(role);
        })
    });
});