const db = require('./connection');
const { User, Character } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Character', 'characters');
  await cleanDB('User', 'users');

  // Seed characters
  const characters = await Character.insertMany([
    {
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      physicalDescription: 'Tall with brown hair',
      occupation: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      physicalDescription: 'Short with blonde hair',
      occupation: 'Doctor',
    },
    {
      name: 'David Johnson',
      age: 45,
      gender: 'Male',
      physicalDescription: 'Medium height, bald',
      occupation: 'Accountant',
    },
    {
      name: 'Emily Davis',
      age: 35,
      gender: 'Female',
      physicalDescription: 'Athletic build, red hair',
      occupation: 'Fitness Trainer',
    },
    // Add more character objects as needed
  ]);

  console.log('Characters seeded');

  // Seed users
  await User.create({
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice@testmail.com',
    password: 'password12345',
    // Include any additional user data or orders if needed
  });

  await User.create({
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob@testmail.com',
    password: 'password12345',
    // Include any additional user data or orders if needed
  });

  await User.create({
    firstName: 'Eve',
    lastName: 'Williams',
    email: 'eve@testmail.com',
    password: 'password12345',
    // Include any additional user data or orders if needed
  });

  await User.create({
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie@testmail.com',
    password: 'password12345',
    // Include any additional user data or orders if needed
  });

  console.log('Users seeded');

  process.exit();
});
