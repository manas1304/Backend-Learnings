// Old way using Prototypes

function Person(name, age){

    this.name = name;
    this.age = age;

}

Person.prototype.greet = function(){

    console.log(`Hello, I am ${this.name} and I am ${this.age} years old!`)

}

const Manas = new Person("Manas", 21);
Manas.greet()







// Modern ES6 Approach for Inheritance...........

class Animal{

    constructor(name, sound){

        this.name = name;
        this.sound = sound;

    }

    makeSound(){

        console.log(`${this.name} makes ${this.sound} Sound!`);

    }

}

class Dog extends Animal{

    constructor(name, breed){

        super(name, "Bark");
        this.breed = breed;

    }

}


const dog = new Dog("Tommy", "Husky");
dog.makeSound();