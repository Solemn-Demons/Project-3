// Importing mongoose library for creating MongoDB schemas
const mongoose = require('mongoose');

// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Importing bcrypt library for password hashing
const bcrypt = require('bcrypt');

// Importing Order schema from Order.js file
const Order = require('./Order');

// Defining user schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  orders: [Order.schema],
});

// Set up pre-save middleware to create password hash
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  await bcrypt.compare(password, this.password);
};

// Creating User model from userSchema
const User = mongoose.model('User', userSchema);

// Exporting User model
module.exports = User;
