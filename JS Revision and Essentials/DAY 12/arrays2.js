// Map Method

let arr = [1,2,3,4,5];
let result = arr.map(num => num*num);

console.log(result);
console.log(arr);
console.log("###########################")

// Map method doesn't modify the original array


// Filter

let arr2 = [1,2,3,4,5,6,7,8,9,10];
let res = arr2.filter(num => num%2 === 0);

console.log(res);
console.log(arr2);

// Filter method also doesn't modify the original array

console.log("#####################");

// Reduce

let array = [1,2,3,4,5,6,7,8,9,10];
let result2 = array.reduce((acc, num) => acc * num, 1);

console.log(result2);
console.log(array)

console.log("###########################");


// Find -- Finding the first matching element

const nums = [1,2,7,11,34,345,11];
const final = nums.find(num => num >= 10)
const index = ``
console.log(final);