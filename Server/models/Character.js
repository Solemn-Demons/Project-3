const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  physicalDescription: String,
  occupation: String,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
