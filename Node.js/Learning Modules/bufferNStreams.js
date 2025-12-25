// const buffer = Buffer.from("Hello");
// console.log(buffer);
// console.log(buffer.toString());

const fs = require('fs');

const readStream = fs.createReadStream('bigFile.txt', {encoding: 'utf-8'});

readStream.on("data", (chunk) =>{

    console.log("Received Chunk", chunk);

})

readStream.on("end", () =>{

    console.log("No more data to read");

})

