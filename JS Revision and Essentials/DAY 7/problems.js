// ############## Q5 -- Use an IIFE to toggle a boolean variable 3 times and print the result each time

let toggle = (function(){
    
    let state = false;

    return function(){

        state = !state;
        console.log("Toggle", state);

    }

})();

toggle();
toggle();
toggle();



// ############ Q4 -- Return a function to add a fixed number to it's argument

const add7 = (function(){

    let fixed = 7;
    return function(num){

        return num + fixed

    }

})();

console.log(add7(3))



// ########### q3 - Define a variable x inside IIFE and prevent access outside.

// (function (){

//     var x = 1;
//     console.log("Inside IIFE", x);

// })();

// console.log(x);



// ########## Sum of array elements using IIFE -- Calculate the sum of [1,2,3,4,5]

let sum = (function(arr){

    return arr.reduce((acc,num) => acc+num, 0);

})([1,2,3,4,5]);
console.log(sum)


// ################# Q1 -- Print Numbers from 5 to 1 with a delay of 1 sec each between them
// IIFE 
for(let i = 5; i >= 1; i--){

    (function(num){

        setTimeout(() => console.log(num), (6 - num)*1000)
    })(i);
}