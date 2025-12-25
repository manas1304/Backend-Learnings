// const nums = [1,2,3,4,5];

// // Map Function 

// const res = nums.map(num => num*num);

// console.log(res);

const nums = [1,2,3,4,5];

// Filter Function

const res = nums.filter(num => num%2 == 0);

console.log(res);

const res2 = nums.reduce((acc,num) => acc+num, 0);
console.log(res2);
