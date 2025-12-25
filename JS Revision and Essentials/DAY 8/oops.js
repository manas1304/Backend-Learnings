// const obj = {

//     name: "Manas",
//     age: 21,
//     profession: "enjoying life",
//     greet: function(){
        
//         console.log("Hello World!");

//     }

// }

// console.log(obj.name);

class Animal{

    constructor(name,type){

        this.name = name;
        this.type = type
    }

    sound(){

        console.log(`${this.name} makes a Sound!`);

    }

}

const dog = new Animal("Dog", "Mammal");
dog.sound();

