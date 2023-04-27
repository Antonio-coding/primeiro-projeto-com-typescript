"use strict";
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
myTuple = [5, 'teste', ['a', 'b']];
//myTuple = [true, false, true]
//object literals -> {prop : value}
const user = {
    name: 'antonio',
    age: 48,
};
console.log(user);
console.log(user.name);
//user.job = "Programador" não consegue atribuir porque eles ja foram definidas pela tipagem 
//any
let a = 0;
a = 'teste';
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
logger('Teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting('jose');
greeting('jose', 'Sir');
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
