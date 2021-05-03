class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id= id;
        this.email = email
    }
//Get Employee Name
    getName (){
        return this.name;
    }
//Return the ID 
    getId () {
        return this.id;
    }
//Return Email

getEmail(){
    return this.email;
}
// for export
module.exports = Employee;

