import { createSelector } from "reselect";

const selectPhrase = (state) => state.phrase;

export const selectPhrases = createSelector(
  [selectPhrase],
  (phrase) => phrase.phrase
);
