const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

class Person {
    constructor(nameArg, ageArg) {
        this._name = nameArg;
        this._age = ageArg;
    }

    get name() {
        return this._name;
    }

    set name(arg) {
        this._name = arg;
    }

    get age() {
        return this._age;
    }

    set age(arg) {
        this._age = arg;
    }
}

class Student extends Person {

    constructor(nameArg, ageArg, academyArg) {
        super(nameArg, ageArg);
        this._academy = academyArg;
    }

    get academy() {
        return this._academy;
    }

    set academy(arg) {
        this._academy = arg;
    }

    signup(callback1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (callback1 == undefined) {
                    reject("We did not receive any callback function");
                } else {
                    let callbackResult = callback1();
                    resolve(`Congrats, you joined ${callbackResult}!`)
                }
            }, 2000);
        });
    }

}

function callbackFc() {
    return "Develhope";
}

class DataProcess {
    static studentInfo(students) {
        return students.map((student) => {
            return `${student.name}, aged ${student.age}, is as student of academy ${student.academy}.`
        });
    }
    static getAdults(students) {
        return students.filter((student) => student.age > 18);
    }
    static getAverageAge(students) {
        let total = students.reduce((total, currentStudent) => total + currentStudent.age, 0);
        return total / students.length;
    }
}

let student = new Student("Constantine", 50, "Develhope");

// student.signup().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log("we had an error");
//     console.log(error);
// })

let students = [];

for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    let newStudent = new Student(person.name, person.age, callbackFc());
    students.push(newStudent);
}

// persons.forEach((person) => {
//     let newStudent = new Student(person.name, person.age, callbackFc());
//     students.push(newStudent);
// })

// console.log(students);

// let process = new DataProcess();
let result = DataProcess.studentInfo(students);
let resultAdults = DataProcess.getAdults(students);
console.log(resultAdults);
let resultAverage = DataProcess.getAverageAge(students);
console.log(resultAverage);

let jsonStr = JSON.stringify(students);
console.log(jsonStr);
let backToJS = JSON.parse(jsonStr);
// console.log(typeof backToJS[0]);
