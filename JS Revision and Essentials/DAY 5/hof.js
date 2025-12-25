// function operate(a,b, operation){

//     return operation(a,b);

// }

// function add(a,b){

//     return a + b;

// }

// console.log(operate(3,4, add))

function greet(name){

    return function(message){

        console.log(`${message}, ${name}`);

    }

}

let greetFunction = greet("Manas");
greetFunction("Hello");