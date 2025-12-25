function once(func){

    let called = false;

    return function(...args){

        if(!called){

            called = true;
            return func(...args);

        }

    }

}


const logMessage = once((message) => console.log(message));

logMessage('Hello World!')
logMessage('Hello World!')
logMessage('Hello World!')









function compose(f,g){

    return function(x){

        return f(g(x));

    }

}

const double = (x) => x*2;
const increment = (x) => x + 1;

const composeFunc = compose(increment, double);
console.log(composeFunc(5));



// ############ Question 1 -- Implement a HOF that applies a function twice


// function applyTwice(num, func){

//     return func(func(num)); // This function should do it task two times whenever the applyTwice function is called

// }

// function addTwo(num){
//     return num + 2;

// }

// console.log(applyTwice(10, addTwo));



// // ############ Question 2 --  Implement a function that returns a function to multiply numbers

// function hof(a,b){

//     return function(){

//         return a*b;

//     }

// }

// let multiply = hof(3,4);

// console.log(multiply())


// ################# Question 3 -- Implement a function that filters an array using a function.

// function filterArray(array, func){

//     return array.filter(func);

// }

// console.log(filterArray([1,2,3,4,5,6,7,8], (num) => num % 2 == 0))

