import { searchPhrases } from "./phrasesCollectionUtils";
import PhrasesCollectionActionTypes from "./phrasesCollectionTypes";

const INITIAL_STATE = {
  allPhrases: null,
};

const phraseCollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhrasesCollectionActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        allPhrases: action.payload,
      };
    case PhrasesCollectionActionTypes.SEARCH_COLLECTIONS:
      return {
        ...state,
        allPhrases: searchPhrases(state.allPhrases, action.payload),
      };
    default:
      return state;
  }
};

export default phraseCollectionReducer;
