//string,boolean, number, ...
let x:number = 10;

x = 20;

console.log(x);

//inferencia x annotation
let y = 12;
// y = "teste"

let z: number=12;

//tipos bassicos 
let firstName: string =  "antonio";
let age : number = 25;
const isAdmin: boolean = true;

// string != string

console.log (typeof firstName);
// object
const myNumbers: number [] = [1,2,3]
console.log (myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase()) é um erro que o programa aponta
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log (myNumbers);
