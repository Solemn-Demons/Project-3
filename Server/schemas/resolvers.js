const { User, Character, Plot } = require('../models'); 

const resolvers = {
  Query: {
    user: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (error) {
        throw new Error('Unable to fetch user');
      }
    },
    character: async (_, { characterId }) => {
      try {
        const character = await Character.findById(characterId);
        return character;
      } catch (error) {
        throw new Error('Unable to fetch character');
      }
    },
    plot: async (_, { plotId }) => {
      try {
        const plot = await Plot.findById(plotId);
        return plot;
      } catch (error) {
        throw new Error('Unable to fetch plot');
      }
    },
  },
  Mutation: {
    addUser: async (_, { firstName, lastName, email, password }) => {
      try {
        const user = new User({ firstName, lastName, email, password });
        await user.save();
        return user;
      } catch (error) {
        throw new Error('Unable to create user');
      }
    },
    addCharacter: async (_, { name, age, gender, physicalDescription, occupation }) => {
      try {
        const character = new Character({ name, age, gender, physicalDescription, occupation });
        await character.save();
        return character;
      } catch (error) {
        throw new Error('Unable to create character');
      }
    },
    addPlot: async (_, { title, description, mainCharacterId, timeline, setting }) => {
      try {
        const plot = new Plot({ title, description, mainCharacter: mainCharacterId, timeline, setting });
        await plot.save();
        return plot;
      } catch (error) {
        throw new Error('Unable to create plot');
      }
    },
  },
};

module.exports = resolvers;
