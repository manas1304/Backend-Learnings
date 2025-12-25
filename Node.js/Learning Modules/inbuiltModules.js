// const os = require("os");
// console.log(typeof(os));

// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.freemem());

const fs = require('fs');

// Write in sync manner

// console.log("Before the Sync Write");
// fs.writeFileSync('data.txt', "Hello World! I am Manas Shukla and I am learning backend in web development.....");
// console.log("After the Sync Write");
// console.log("Before the Sync Read");
// const content = fs.readFileSync('data.txt', 'utf-8');
// console.log(content);
// console.log("After the Sync Read");

console.log("Before Async Write and Read");

fs.writeFile('note.txt', "Hello I am Manas Shukla", (err) =>{

    if(err) throw err
    console.log("Done writing async way");
    console.log("Start reading async way");
    const content = fs.readFile('note.txt', 'utf8', (err,data) =>{

        if(err) throw err
        console.log(data);

    })
    console.log("After reading data")
})

console.log("After Async Write and Read");