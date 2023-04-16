/*
para hacer un metodo privado solo se pone #nombre_metodo
privado significa que solo puede ser accedido dentro de
la clase
*/
class User {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak() {
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