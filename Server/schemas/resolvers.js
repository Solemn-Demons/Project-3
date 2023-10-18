const { User, Character, Plot } = require('../models');

const resolvers = {
  Query: {
    getCharacterById: async (_, { _id }) => {
      try {
        return await Character.findById(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
    getAllCharacters: async () => {
      try {
        return await Character.find();
      } catch (error) {
        throw new Error(error);
      }
    },
    getPlotById: async (_, { _id }) => {
      try {
        return await Plot.findById(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
    getAllPlots: async () => {
      try {
        return await Plot.find();
      } catch (error) {
        throw new Error(error);
      }
    },
    getUserById: async (_, { _id }) => {
      try {
        return await User.findById(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
    getAllUsers: async () => {
      try {
        return await User.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createCharacter: async (_, characterInput) => {
      try {
        return await Character.create(characterInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateCharacter: async (_, { _id, ...updateData }) => {
      try {
        return await Character.findByIdAndUpdate(_id, updateData, {
          new: true,
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteCharacter: async (_, { _id }) => {
      try {
        return await Character.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
    createPlot: async (_, plotInput) => {
      try {
        return await Plot.create(plotInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePlot: async (_, { _id, ...updateData }) => {
      try {
        return await Plot.findByIdAndUpdate(_id, updateData, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    deletePlot: async (_, { _id }) => {
      try {
        return await Plot.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
    createUser: async (_, userInput) => {
      try {
        return await User.create(userInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateUser: async (_, { _id, ...updateData }) => {
      try {
        return await User.findByIdAndUpdate(_id, updateData, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteUser: async (_, { _id }) => {
      try {
        return await User.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
