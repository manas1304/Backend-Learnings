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

    const stud = await studentFile.create({
        name:"Manas",
        contact:{phone: 7629339424, guardian: "Shukla"},
        age: 21,
        email: "manasshukla@gmail.com"
    })
    console.log(stud);
    
  } catch (err) {
    console.log("Mongo Error", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected");
  }
}

connect();