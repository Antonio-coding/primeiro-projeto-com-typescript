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

// tuplas -> tuple

let myTuple: [number, string , string[]]

myTuple = [5, 'teste',['a', 'b']]
//myTuple = [true, false, true]

//object literals -> {prop : value}
const user: {name:string, age: number} = {
    name: 'antonio',
    age:48,
}
console.log(user);
console.log(user.name);
//user.job = "Programador" não consegue atribuir porque eles ja foram definidas pela tipagem 

//any
let a:any = 0

a= 'teste';
a = true;
a = [];

// union type

let id: string | number = "10"
 id = 200

 //id = true
 // id = []

  // type alias 

  type myIdType = number | string  

  const userId: myIdType = 10 
  const productId: myIdType = "000011"
  const shirId: myIdType = 1231546

  // enum 
  // tamanho de roupas (size: medio , size: pequeno)
  enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
  }

  const camisa = {
    name: "Camisa gola V",
    size: Size.M,
  }

  console.log( camisa);

  // literal Types

  //let teste : "algumvalor";
  // teste = "outrovalor";
   let teste: "autenticado" | null;
   teste = "autenticado";
   teste = null;
   
   // funçoes
   function sum( a: number, b: number) {
    return a+b;
   }
   console.log ( sum(12,45));
   // console.log (sum("12",true)) 

   function sayHelloTo(name: string): string {
    return `Hello ${name}`;
   }

   console.log(sayHelloTo("Antonio"));

   function logger(msg:string):void{
    console.log(msg);
   }
logger('Teste!')

function greeting (name: string, greet?: string): void {
   if (greet) {
    console.log(`Olá ${greet} ${name}` );
    return;
   }
   console.log(`Olá ${name}`);
}

greeting('jose');
greeting('jose', 'Sir');

//interfaces
interface MathFunctionParams {
    n1: number,
    n2: number;
}
function sumNumbers (nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1:1, n2:2}));

function multiplyNumbers(nums: MathFunctionParams)
{
    return nums.n1 * nums.n2;
}
 const someNumbers: MathFunctionParams = {
    n1: 14, 
    n2: 1012120,
 };
 console.log(multiplyNumbers(someNumbers));