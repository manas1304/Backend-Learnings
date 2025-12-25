// Encapsulation through IIFE

const counter = (function(){

    let count  = 0;

    return{

        increment: () => count++,
        getCount: () => count
    }
})();


console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
counter.increment();
console.log(counter.getCount());




// Syntax of IIFE Function

// (function (){

//     console.log("This is IIFE Function");

// })();

