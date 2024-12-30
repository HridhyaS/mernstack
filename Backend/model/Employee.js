const mongoose = require('mongoose');

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Sal: Number

})

var Employeemodel = mongoose.model('employee', schema);
module.exports = Employeemodel;  //exporting the model
