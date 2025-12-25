class Animal{

    speak(){

        console.log("Animal makes a Sound")

    }

}

class Dog{

    speak(){

        console.log("Dog makes a sound");

    }

}

class Cat{

    speak(){

        console.log("Cat makes a sound");

    }

}

const dog = new Dog();
const cat = new Cat();
const animal3 = new Animal();

// animal1.speak();
// animal2.speak();
// animal2.speak();


function makeAnimalSound(animal){

    animal.speak();

}

makeAnimalSound(dog);
makeAnimalSound(cat);