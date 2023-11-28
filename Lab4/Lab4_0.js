class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;

    if(new.target === Person) {
        throw new Error('Person class cannot be instantiated');
    }
    }
    printPerson() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`)
    }
}