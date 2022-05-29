const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email, school)
        this.school = school;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = intern;