"use strict";
// JSDoc
/**
 * This function does absolutely nothing at all!!
 * @param a - some value
 * @param b - another value
 */
function something(a, b) { }
/**
 * Basic Types
 */
let id = 5;
let compane = "Traversy";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3];
let arr = [1, true, "Traversy"];
//Tuple кортеж масив, в якому вказуємо на якому місці буде конкретний тип
let person = [1, "Brad", true];
//Tuple array
let employee;
employee = [
    [1, "Brad"],
    [1, "Brad"],
    [1, "Brad"],
];
//Union
let pid;
pid = "22";
/**
 * Enum - enumerated types
 */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Left); //3
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "SomeCrazyValue";
    UserRoles["User"] = "StandartLoh";
})(UserRoles || (UserRoles = {}));
let user = {
    role: "StandartLoh",
};
const isAdmin = user.role === UserRoles.Admin;
const client = {
    id: 1,
    name: "John",
};
/**
 * Type Assertion приведення до типу
 */
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
/**
 * Functions
 */
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
const Isabella = {
    manufacturer: "Cort",
    strings: 6,
};
const myUser = {
    status: "admin",
    age: 15,
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
/**
 * Classes
 */
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    logId() {
        console.log(this.id);
    }
    register() {
        return `${this.name} is registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
brad.logId();
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Sean", "Developer");
console.log(emp);
