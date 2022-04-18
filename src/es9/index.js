//Mejor estructuración de objetos
const obj = {
    name: 'Alan',
    age: 20,
    country: 'ES',
};

let {name, ...all} = obj;
console.log(all);

//Concatenar objetos
const obj1 = {
    name: 'Alan',
    age: 20,
}

const obj2 = {
    ...obj1,
    country: 'ES',
}

//Promesas con el .finally
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(()=> resolve ('Hello World'), 2000)
        : reject (new Error ('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'));


//Mejor uso de los regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];


console.log(year, month, day);


