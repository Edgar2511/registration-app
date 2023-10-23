function exampleFunction(num: number, str: string): boolean {
  return true;
}

//------
function unionFunction(
  input: string | number
): "number" | "string" | undefined {
  if (typeof input === "number") {
    return "number";
  } else if (typeof input === "string") {
    return "string";
  }
}

//------
function sumArray(numbers: number[]) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

//------
interface Person {
  name: string;
  age: number;
}

function greetPerson(person: Person) {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

//------
function higherOrderFunction(callback: typeof callbackFunction): void {
  const result = callback(10);
  console.log("Result:", result);
}

function callbackFunction(num: number): boolean {
  return num > 5;
}

higherOrderFunction(callbackFunction);

//------
function exampleFunction2(num: unknown, str: unknown): boolean {
  return true;
}

//------

interface User {
  name: string;
  age: number;
  address: UserAddress;
}

interface UserAddress {
  street: string;
  city: string;
}

const user: User = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Exampleville",
  },
};

//------
interface Calcukator {
  add: (a: number, b: number) => number;
}
const calculator = {
  add: function (a: number, b: number): number {
    return a + b;
  },
  subtract: function (a: number, b: number): number {
    return a - b;
  },
};

//------
const arr = [];

const dynamicKey = "color";
const car = {
  make: "Toyota",
  [dynamicKey]: "blue",
};

//----
let num: number = 5;
let name2: string = "John";
let isValid: boolean = true;

//=-------
function add(a: number, b: number) {
  return a + b;
}

//---------
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

//
interface IPerson {
  name: string;
  age: number;
}

let person: IPerson = {
  name: "Alice",
  age: 30,
};

///
interface IGetDistance {
  x: number;
  y: number;
}

function getDistance(point: IGetDistance) {
  return Math.sqrt(point.x ** 2 + point.y ** 2);
}

//
interface IUser5 {
  name: string;
}

let user3: IUser5 = {
  name: "Bob",
};

console.log(user3.name);

//??????
function display(value: any): void {
  console.log(value);
}

function identity(arg: any) {
  return arg;
}

// class Car {
//     constructor(make:string, model:string) {
//         this.make = make;
//         this.model = model;
//     }
//     getDetails() {
//         return `${this.make} ${this.model}`;
//     }
// }

//-----

function add1(a: number, b: number): number {
  return a + b;
}

//-----
function display3(value: any): void {
  console.log(value);
}

//-------
function sumArray2(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

//-----
const numbersss: number[] = [1, 2, 3, 4, 5];
//------

interface People {
  name: string;
  age: number;
}

const people: People[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

//-------
interface Personn {
  name: string;
  age: number;
}

const person1111: Personn = {
  name: "John",
  age: 25,
};
//------

interface Car {
  make: string;
  [key: string]: string;
}

const dynamicKey2 = "color";
const car2: Car = {
  make: "Toyota",
  [dynamicKey]: "blue",
};

//--------
function higherOrderFunction2(callback2: (num: number) => boolean): void {
  const result = callback2(10);
  console.log("Result:", result);
}

function callbackFunction2(num2: number): boolean {
  return num2 > 5;
}

higherOrderFunction2(callbackFunction2);

//--------
async function fetchData(): Promise<void> {
  const response = await fetch("https://api.example.com/data");
  const data: any = await response.json();
  console.log(data);
}

fetchData();

// //=====
// function higherOrderFunction3(
//   callback3: (num3: number) => boolean,
//   num3: number
// ) {
//     //?--> isEven(num:number) : boolean
//   const isEven = callback3(num3);
//   console.log("Is even?", isEven);
// }

// function isEven(num3: number): boolean {
//   return num3 % 2 === 0;
// }

// higherOrderFunction(isEven, 10);

//=====

function sum(...numbers3: number[]): number {
  return numbers3.reduce((acc: number, num: number) => acc + num, 0);
}

//====
//???????
const numbers5: number[] = [5, 12, 3, 8, 15];

const doubledGreaterThanTen: number[] = numbers5
  .map((num: number) => num * 2)
  .filter((num: number) => num > 10);

//-----
const numbers0: number[] = [1, 2, 3, 4, 5];
const [first, second]: typeof numbers0 = numbers0;
//

interface Cars {
  make: string;
  model: string;
  getDetails: () => string;
}

const cars: Cars = {
  make: "Toyota",
  model: "Camry",
  getDetails: function () {
    return `${this.make} ${this.model}`;
  },
};

//------
interface Address {
  street: string;
  city: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

const person5: Person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Exampleville",
  },
};

//----
async function fetchData2(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

//----
function addd(a: number, b: number): number {
  return a + b;
}

//
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

//??????
function multiplyBy(factor: number) {
  return function (num: number) {
    return num * factor;
  };
}

const double22 = multiplyBy(2);
const result = double22(10); // result will be 20

//
const numberss12: number[] = [1, 2, 3, 4, 5];
const [firstt, secondd, ...rest] = numberss12;

//
const numbersArr: number[] = [1, 2, 3, 4, 5];
const doubledNumbers = numbersArr.map((num: number) => num * 2);
const evenNumbers = numbersArr.filter((num: number) => num % 2 === 0);

//
const numbersArray: number[] = [1, 2, 3, 4, 5];
const sumArr = numbersArray.reduce((acc, num) => acc + num, 0);

//
interface UsersObjTypes {
  name: string;
  age: number;
}

const usersObj: UsersObjTypes = {
  name: "John",
  age: 30,
};

//
interface CalcFnTypes {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calculatorFn: CalcFnTypes = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

//
interface CarsObjTypes {
  make: string;
  [dynamicKey: string]: string;
}

// const dynamicKeys: string = "color";
const carsObj: CarsObjTypes = {
  make: "Toyota",
  [dynamicKey]: "blue",
};

//
function factorialFn(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * factorialFn(n - 1);
}

//
function higherOrderFn(callback: (num: number) => boolean) {
  const result = callback(10);
  console.log("Result:", result);
}

function callbackFn(num: number): boolean {
  return num > 5;
}

higherOrderFn(callbackFn);

//
async function fetchDataFn(): Promise<{ name: "Edgar" }> {
  const response = await fetch("https://api.example.com/data");
  const data: unknown = await response.json();
  //   console.log(data);
  return { name: "Edgar" };
}

fetchData();

//
function calculateArea(radius: number) {
  return Math.PI * radius * radius;
}

//
interface AddresTypes2 {
  street: string;
  city: string;
}

interface PersonObjTypes {
  name: string;
  age: number;
  address: AddresTypes2;
}

const personObj: PersonObjTypes = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};

//
function doubleArray(
  numbers: number[],
  callback: (num: number, x: number) => number[]
) {
  return numbers.map(callback);
}

function double(num: number) {
  return num * 2;
}

//
async function fetchDataFunc(url: string): Promise<unknown> {
  const response = await fetch(url);
  const data: unknown = await response.json();
  return data;
}

//
class CalculatorClass {
  private value: number;
  constructor() {
    this.value = 0;
  }

  add(num: number): void {
    this.value += num;
  }

  getValue(): number {
    return this.value;
  }
}

//
function greetFn(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}
//greetFn()
//
type Status = "active" | "inactive" | "blocked";

function setStatus(status: Status): void {
  // Логика установки статуса пользователя
  //A function whose declared type is neither 'undefined',
  //'void', nor 'any' must return a value.
}

//
interface CarsTypes {
  make: string;
  model: string;
  year: number;
}

const carsTypes: CarsTypes = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

//
interface ObjTypes {
  name: string;
  age: number;
}

const students: Array<ObjTypes> = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
];

interface UserFoo {
  name: string;
  age: number;
}

const axperner = ["sergo", "arsen", "poxos"];

const foo = (types: UserFoo, axperner: string[]) => {
  const { age, name } = types;
};
foo({ age: 23, name: "Arsen" }, axperner);

/* foo({
    name:'Arsen',
    age:23
})
*/
