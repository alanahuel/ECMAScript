//Valores predefinidos

function newFuntion(name = 'alan', age = '20', country = 'Spain' ){
    console.log(name, age, country)
};

newFuntion();

//Template literal (comillas francesas)

let hello = 'hello';
let world = 'world';
let epicPhrase = `${hello} ${world}`;

//Let y Const multilinea

let lorem = `otra frase épica que necesitamos
pero tampoco necesito que se ponga el espaciado `;

console.log(lorem);


let person = {
    name: 'alan',
    age: 20,
    country: 'Spain'
};

let {name, age, country} = person;
console.log(name, age, country);

//Spread operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jésica', 'Celia'];

let education = ['Juan', ...team1, ...team2];
console.log(education);


//Objetos

let nombre = 'Alan';
let edad = 20;

obj = {nombre, edad};
console.log(obj);

//Arrow Funtions

const names = [
    {name: 'Alan', age: 20},
    {name: 'Yesica', age: 27}
];

let listOfNames = names.map(items=> console.log(items.name));

const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
      if (false) {
        resolve('Hey!');
      } else {
        reject('Ups!!');
      }
    });
};

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));
//MÓDULOS Y GENERADORES

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
};

const calc = new calculator();
console.log(calc.sum(2, 2));

import{hello} from './modulo';
hello();


function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
