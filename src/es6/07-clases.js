class User {}; // declaración de una clase

// instancia de una clase
const newUser = new User(); 

//-------
class User{
    // metodos
    greeting() { // es como una función sin la palabra resservada function
        return 'Hello';
    }
};

const ccd = new User();
console.log(ccd.greeting()); // la forma de acceder al método
const bebeloper = new User();
console.log(bebeloper.greeting()); 

//-------------
/*
Dentro de la clase se tiene un constructor
es en donde se van a inicializar elementos
*/

// constructor
class User {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new User();

// this
/*
this = hace referencia al elemento padre que lo
contiene
*/
class User {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User('Ana');
console.log(ana.greeting());

// setters getters

class User {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting () {
        return `${this.speak()} ${this.name}`;
    }

    //getter and setters
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new User('David',15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);