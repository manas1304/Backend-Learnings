/*
    Logic to connect with the MongoDb....
*/

const mongoose = require("mongoose");
require("dotenv").config()
const studentFile = require('./models/studentsModel');

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDb connection is succesfull');

    // Deleting the objects in the Database
    const delObj = await studentFile.deleteMany({}); // Since no filer has been provided to the deleteMany function so it will delete all

    // Inserting the student data
    const student = await studentFile.insertOne({name:"Manas", age: 21});
    console.log(student);

    /*
      Inserting multiple records in the given collections
    */

    const multiStudents = await studentFile.insertMany([
      {name:"Khushi", age: 18},
      {name:"Renu", age: 45},
      {name:"Naveen", age: 50}
    ])

    console.log(multiStudents.map(item => item.name));

    // Find the count of documents inside the students collection
    const studCountDoc = await studentFile.countDocuments();
    console.log(studCountDoc);

    // Search the document based on name
    const obj = await studentFile.findOne({name:"Manas"});
    console.log(obj);
    
  } catch (err) {
    console.log("Mongo Error", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected");
  }
}

connect();