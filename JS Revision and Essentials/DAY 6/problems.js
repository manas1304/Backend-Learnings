// ############# Q5 - Implement a function that returns multiple counters using closures

function multiCounter(){

    let count = 0;

    return {

        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count

    };

}

const counterA = multiCounter();

console.log(counterA.increment());
console.log(counterA.increment());
console.log(counterA.increment());
console.log(counterA.decrement());
console.log(counterA.getValue());



// ########### Q4 - Implement a function that caches results using closures

function memoize(func){

    let cache = {};

    return function (num){

        if(cache[num] !== undefined){

            console.log("Fetching from the Cache...");
            return cache[num];

        }

        else{

            console.log("Computing Results");
            let result = func(num);
            cache[num] = result;
            return cache[num];

        }

    }

}


const square = memoize(x => x*x);
console.log(square(4));
console.log(square(5));
console.log(square(4));



// ############# Q3 - Create a function to generate unique IDs each time it prints!!!!!

function idGenerator(){

    let id = 0;

    return function (){

        id++;
        return id;

    }

}

const generateId = idGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());



// ################# Q2 - Implement a private variable using closures

function secretStorage(secret){

    return function getSecret(){

        return secret;

    }

}

const returnSecret = secretStorage("I love JS!");
console.log(returnSecret());


// ######################### Q 1 -- Implement a function that remembers a counter value 

function createCounter(){

    let count = 0;

    return function (){

        count++;
        return count;

    }

}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());