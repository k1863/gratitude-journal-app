import PhraseActionTypes from "./phraseTypes";

export const addPhrase = (phrase) => ({
  type: PhraseActionTypes.ADD_PHRASE,
  payload: phrase,
});

export const editPhrase = (phrase) => ({
  type: PhraseActionTypes.EDIT_PHRASE,
  payload: phrase,
});

export const deletePhrase = (phrase) => ({
  type: PhraseActionTypes.DELETE_PHRASE,
  payload: phrase,
});
