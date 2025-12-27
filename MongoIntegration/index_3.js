/*
    Logic to connect with the MongoDb....
*/

const mongoose = require("mongoose");
require("dotenv").config()
const studentFile = require('./models/studentsModel');
const Address = require("./models/addressModel")

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDb connection is succesfull');

    // Deleting all documents
    await Promise.all([Address.deleteMany({}), studentFile.deleteMany({})]);

    // Inserting multiple records/documents
    const stud = await studentFile.insertMany([
      {name: "Manas", email:"abc@gmail.com", age:21},
      {name: "Shukla", email:"def@gmail.com", age:25}
    ])
    console.log(stud);

    // Finding the count of documents inside the collection
    const n = await studentFile.countDocuments({});
    console.log(n);

    // Age filter put while counting documents
    const m = await studentFile.countDocuments({age: {$gte: 24}});
    console.log(m)

   // Updating the existing document
    const updateStud = await studentFile.findOneAndUpdate(
      {email: "abc@gmail.com"}, // finding which document to update
      {$set: {age: 35}}, // after finding update the data
      {new: true, includeResultMetadata: true} // doesn't exist then create new and include meta data

    )
    console.log(updateStud);

    // Delete the document
    // const res1 = await studentFile.findOneAndDelete({
    //   email: "abc@gmail.com"
    // })
    // console.log(res1);



    // Aggregation


    const aggregate_by_age = await studentFile.aggregate([
      {$group: {_id: '$age', count: {$sum: 1}}}
    ])
    console.log(aggregate_by_age)
   
  } catch (err) {
    console.log("Mongo Error", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected");
  }
}

connect();