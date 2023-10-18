const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, Character, Plot } = require('../models');

const checkAuthenticated = (context) => {
  if (!context.user) {
      throw new Error('Authentication required.');
  }
};

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
    async signup(_, { username, email, password }) {

      const existingUser = await User.findOne({ email });
      if (existingUser) {
          throw new Error('Email already in use');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
          username,
          email,
          password: hashedPassword
      });

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return {
          token,
          user,
      };
  },
    async login(_, { email, password }) {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('User not found');
      }

      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return {
        token,
        user,
      };
    },
    createCharacter: async (_, characterInput, context) => {
      checkAuthenticated(context);
      try {
        return await Character.create(characterInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateCharacter: async (_, { _id, ...updateData }, context) => {
      checkAuthenticated(context);
      try {
        return await Character.findByIdAndUpdate(_id, updateData, {
          new: true,
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteCharacter: async (_, { _id }, context) => {
      checkAuthenticated(context);
      try {
        return await Character.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
    createPlot: async (_, plotInput, context) => {
      checkAuthenticated(context);
      try {
        return await Plot.create(plotInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePlot: async (_, { _id, ...updateData }, context) => {
      checkAuthenticated(context);
      try {
        return await Plot.findByIdAndUpdate(_id, updateData, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    deletePlot: async (_, { _id }, context) => {
      checkAuthenticated(context);
      try {
        return await Plot.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
    createUser: async (_, userInput) => {
      // ... [no changes here]
    },
    updateUser: async (_, { _id, ...updateData }, context) => {
      checkAuthenticated(context);
      try {
        return await User.findByIdAndUpdate(_id, updateData, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteUser: async (_, { _id }, context) => {
      checkAuthenticated(context);
      try {
        return await User.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;