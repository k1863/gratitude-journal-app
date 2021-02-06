import PhraseActionTypes from "./phraseTypes.js";

const INITIAL_STATE = {
  hidden: true,
  phrases: [],
};

const phraseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhraseActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case PhraseActionTypes.ADD_PHRASE:
      return {
        ...state,
        phrases: action.payload,
      };
    case PhraseActionTypes.DELETE_PHRASE:
      return {
        ...state,
        phrases: state.phrases.filter(
          (phrase) => phrase._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default phraseReducer;
