import PhrasesCollectionActionTypes from "./phrasesCollectionTypes";

export const updateCollections = (phrasesMap) => ({
  type: PhrasesCollectionActionTypes.UPDATE_COLLECTIONS,
  payload: phrasesMap,
});

export const searchCollections = (collectionsMap) => ({
  type: PhrasesCollectionActionTypes.SEARCH_COLLECTIONS,
  payload: collectionsMap,
});
