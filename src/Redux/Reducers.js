import initState from "./InitState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        loading: false,
        characters: action.characters
      };
    case "GET_CHARACTER_FAILED":
      return {
        ...state,
        loading: false
      };
    case "GET_CHARACTERS":
      return {
        ...state,
        loading: true
      };
    case "GET_CHARACTER":
      return {
        ...state,
        loading: true
      };
    case "GET_CHARACTER_SUCCESS":
      return {
        ...state,
        loading: false,
        character: action.character
      };
    default:
      return initState;
  }
};
