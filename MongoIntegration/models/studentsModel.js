/*
    Define the schema for the Student
*/

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  phone: Number,
  guardian: String,
}, {_id: false});

const studentSchema = new mongoose.Schema({
  name: String,
  age: {type: Number, required: true}, // Added the required constraint which make passing the age compulsary..........
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  contact: contactSchema,
  email: {type: String, required: true, unique: true},
  scores:[Number]
}, {timestamps: true});

const studentExport = mongoose.model("studentFile", studentSchema);
module.exports = studentExport;
