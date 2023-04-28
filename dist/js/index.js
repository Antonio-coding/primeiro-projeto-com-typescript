"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//string,boolean, number, ...
let x = 10;
x = 20;
console.log(x);
//inferencia x annotation
let y = 12;
// y = "teste"
let z = 12;
//tipos bassicos
let firstName = "antonio";
let age = 25;
const isAdmin = true;
// string != string
console.log(typeof firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase()) é um erro que o programa aponta
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//myTuple = [true, false, true]
//object literals -> {prop : value}
const user = {
    name: "antonio",
    age: 48,
};
console.log(user);
console.log(user.name);
//user.job = "Programador" não consegue atribuir porque eles ja foram definidas pela tipagem
//any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "000011";
const shirId = 1231546;
// enum
// tamanho de roupas (size: medio , size: pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
// literal Types
//let teste : "algumvalor";
// teste = "outrovalor";
let teste;
teste = "autenticado";
teste = null;
// funçoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 45));
// console.log (sum("12",true))
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Antonio"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("jose");
greeting("jose", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 14,
    n2: 1012120,
};
console.log(multiplyNumbers(someNumbers));
//narrowing
// checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`o numero é ${info}`);
        return;
    }
    console.log("não foi passado um número");
}
doSomething(526);
doSomething(true);
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuario é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O Idade do usuario é: ${this.role}`);
            return;
        }
        console.log(`informação restrita!`);
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`O modelo do veículo é ${this.brand}`);
    }
}
const fusca = new Car('VW', 4);
fusca.showBrand();
//heranca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators 
//cosntructor decotions
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('sam');
console.log(sam);
