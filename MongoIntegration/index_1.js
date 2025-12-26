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

    const add = await Address.create({line1:"Whitefield", city:"Banglore", country:"India"});
    const stud = await studentFile.create({name:"Manas", age:21, address: add._id})
    console.log(add);
    console.log(stud);

    //Now I should get the address of the above student
    const a1 = await Address.findById({_id: stud.address});

    // Generating the populated data
    const populated_stud = await studentFile.findOne({_id:stud._id}).populate('address');
    console.log(populated_stud)
   
    
  } catch (err) {
    console.log("Mongo Error", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected");
  }
}

connect();