const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoreSchema = new mongoose.Schema({
  name : String
  
});

module.exports = new mongoose.model('Categore', categoreSchema);