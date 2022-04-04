// JSDoc
/**
 * This function does absolutely nothing at all!!
 * @param a - some value
 * @param b - another value
 */
function something(a: any, b: any) {}

/**
 * Basic Types
 */
let id: number = 5;
let compane: string = "Traversy";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, true, "Traversy"];

//Tuple кортеж масив, в якому вказуємо на якому місці буде конкретний тип
let person: [number, string, boolean] = [1, "Brad", true];

//Tuple array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [1, "Brad"],
  [1, "Brad"],
];

//Union

let pid: string | number;

pid = "22";

/**
 * Enum - enumerated types
 */
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// console.log(Direction1.Left); //3

enum UserRoles {
  Admin = "SomeCrazyValue",
  User = "StandartLoh",
}

let user = {
  role: "StandartLoh",
};

const isAdmin = user.role === UserRoles.Admin;
// console.log(isAdmin);

/**
 * Objects
 */

type Client = {
  id: number;
  name: string;
};

const client: Client = {
  id: 1,
  name: "John",
};

/**
 * Type Assertion приведення до типу
 */
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

/**
 * Functions
 */
function addNum(x: number, y: number): number {
  return x + y;
}

// void
function log(message: string | number): void {
  console.log(message);
}

/**
 * Interfaces
 */

interface Guitar {
  manufacturer: string;
  readonly strings: number;
  material?: string; // optional property
}

const Isabella: Guitar = {
  manufacturer: "Cort",
  strings: 6,
};

// type Point = number | string;
// const p1: Point = 1

type UserStatus = "admin" | "user" | "moderator";
interface MyUser {
  status: UserStatus;
  age: number;
}

const myUser: MyUser = {
  status: "admin",
  age: 15,
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

interface PersonInterface {
  name: string;
  register(): string;
}

/**
 * Classes
 */
class Person implements PersonInterface {
  private id: number; //private | protected | public by default
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Sean", "Developer");
console.log(emp);
