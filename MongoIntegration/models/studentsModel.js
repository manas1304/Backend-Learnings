/*
    Define the schema for the Student
*/

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    
    name: String,
    age: Number,
})

const studentExport = mongoose.model('studentFile', studentSchema);
module.exports = studentExport;