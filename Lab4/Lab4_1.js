//Mixin
let helperMixin = {
    showSalary() {
        console.log(`Salary: ${this.salary}`);
    },
    increaseSalalry() {
        this.salary += 1000;
    
    }
}
class Employee extends Person {
    static counter = 0;
    constructor(name, age, city, salary) {
        super(name, age, city);
        this.salary = salary;
        Employee.counter++;

        Object.assign(Employee.prototype, helperMixin);
    }
    printPerson() {
        super.printPerson();
        console.log(`Salary: ${this.salary}`);
    }
    static displayHTRules() {
        console.log("Company's HR Rules: \n1. Rule 1 \n2. Rule 2 \n3. Rule 3");
    }
    static displayCount() {
        console.log(`Total number of employees: ${Employee.counter}`);
    }
}

let employee1 = new Employee('John', 30, 'New York', 50000);
employee1.printPerson();
let employee2 = new Employee('Mary', 20, 'India', 60000);
employee2.printPerson();
let employee3 = new Employee('Alice', 18, 'Spain', 70000);
employee3.printPerson();
let employee4 = new Employee('Mark', 40, 'France', 80000);
employee4.printPerson();

Employee.displayHTRules();
Employee.displayCount();
console.log("\n\nAfter increasing the salaries by 10%:\n");
employee1.increaseSalalry();
employee1.showSalary();
employee2.increaseSalalry();
employee2.showSalary();