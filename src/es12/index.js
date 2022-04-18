const string = "JavaScript es maravilloso, con JavaScript voy a crear el futuro de la web"

const replacedString = string.replaceAll("JavaScript", "Python")
console.log(replacedString);


class Message {
    #show(val){
        console.log(val)
    };
   
    
};

const message = new Message();
message.show('Hola!')


const promise1 = new Promise ((resolve, reject) => reject("1"));
const promise2 = new Promise ((resolve, reject) => resolve("2"));
const promise3 = new Promise ((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    };
}


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);

