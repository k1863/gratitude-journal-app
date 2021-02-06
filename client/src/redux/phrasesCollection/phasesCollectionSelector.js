import { createSelector } from "reselect";

const selectAllPhrases = (state) => state.phrasesCollection;

export const selectPhrases = createSelector(
  [selectAllPhrases],
  (phrasesCollection) => phrasesCollection
);
