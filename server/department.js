//criando Schema Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    name:String
});

module.exports = mongoose.model("Department", departmentSchema);