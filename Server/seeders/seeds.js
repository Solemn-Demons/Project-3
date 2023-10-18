const db = require('../config/connection');
const { User, Character, Plot } = require('../models');
const cleanDB = require('./cleanDB');

const userSeeds = require('./userSeeds.json');
const plotSeeds = require('./plotSeeds.json');
const characterSeeds = require('./characterSeeds.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Plot', 'plots');
  await cleanDB('Character', 'characters');

  // Bulk create each model
  const users = await User.insertMany(userSeeds);

  // Obtain the Character _id values as you insert them
  const characters = await Character.insertMany(characterSeeds);

  // Initialize an index for character selection
  let characterIndex = 0;

  // Iterate through plots and associate characters in a round-robin fashion
  for (let i = 0; i < plotSeeds.length; i++) {
    const character = characters[characterIndex];
    plotSeeds[i].mainCharacterId = character._id;

    // Increment the character index for the next plot, looping back to the start if needed
    characterIndex = (characterIndex + 1) % characters.length;
  }

  // Bulk insert the Plot documents
  const plots = await Plot.insertMany(plotSeeds);

  // Associate Characters with Plots
  for (const plot of plots) {
    const randomCharacterId =
      characters[Math.floor(Math.random() * characters.length)]._id;
    plot.mainCharacterId = randomCharacterId;
    await plot.save();
  }

  console.log('All done!');
  process.exit(0);
});
