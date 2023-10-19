import {
  GET_CHARACTER_BY_ID,
  GET_PLOT_BY_ID,
  GET_USER_BY_ID,
  GET_ALL_CHARACTERS,
  GET_ALL_PLOTS,
  GET_ALL_USERS,
  LOGIN,
  CREATE_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  CREATE_PLOT,
  UPDATE_PLOT,
  DELETE_PLOT,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from './actions'; // Import your GraphQL queries and mutations

// Define initial state
const initialState = {
  characters: [],
  plots: [],
  users: [],
  currentUser: null,
};

// Define the reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle mutations
    case CREATE_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characters: state.characters.map((character) =>
          character.id === action.payload.id ? action.payload : character
        ),
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== action.payload.id
        ),
      };
    case CREATE_PLOT:
      return {
        ...state,
        plots: [...state.plots, action.payload],
      };
    case UPDATE_PLOT:
      return {
        ...state,
        plots: state.plots.map((plot) =>
          plot.id === action.payload.id ? action.payload : plot
        ),
      };
    case DELETE_PLOT:
      return {
        ...state,
        plots: state.plots.filter((plot) => plot.id !== action.payload.id),
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id),
      };

    // Handle queries
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_ALL_PLOTS:
      return {
        ...state,
        plots: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_CHARACTER_BY_ID:
      // Handle the GET_CHARACTER_BY_ID query
      // You may update the state with the received character data
      return {
        ...state,
        characters: [action.payload],
      };
    case GET_PLOT_BY_ID:
      // Handle the GET_PLOT_BY_ID query
      // You may update the state with the received plot data
      return {
        ...state,
        plots: [action.payload],
      };
    case GET_USER_BY_ID:
      // Handle the GET_USER_BY_ID query
      // You may update the state with the received user data
      return {
        ...state,
        users: [action.payload],
      };
    case LOGIN:
      // Handle the login action if needed
      // You may store the user's authentication token or user information
      return {
        ...state,
        currentUser: action.payload.user,
      };

    default:
      return state;
  }
};
