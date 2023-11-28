class Course {
    constructor(name, time, date, room) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.room = room;
    }
}
class Student extends Person {
    #code;
    #courses = [];
    constructor(name, age, city, faculty, code) {
        super(name, age, city);
        this.faculty = faculty;
        this.#code = code;

    if (new.target !== Student) {
        throw new Error("Student class can't be inherited");
        }
    }
    get code() {
        return this.#code;
    }
    set code(code) {
        this.#code = code;
    }
    addCourse(course) {
        this.#courses.push(course);
    }
    printCourse() {
        return this.#courses;
    }
    printPerson() {
        super.printPerson();
        console.log(`Faculty: ${this.faculty}`);
        console.log(`Code: ${this.#code}`);
        this.#courses.forEach(course => {
            console.log(`Name: ${course.name}, Time: ${course.time}, Date: ${course.date}, Room: ${course.room}`);
        });
        console.log(this.printCourse());
    }
}
let student = new Student('John', 20, 'New York', 'Engineering', 3089);
let course1 = new Course('Math', '10:00', '2022-01-01', '101');
let course2 = new Course('English', '11:00', '2022-01-02', '102');
student.addCourse(course1);
student.addCourse(course2);
student.printPerson();