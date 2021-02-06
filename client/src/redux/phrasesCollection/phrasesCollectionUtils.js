export const searchPhrases = (allPhrases, searchInput) => {
  const phraseItems = Object.values(allPhrases);
  console.log(phraseItems);
  return phraseItems.filter((phrase) =>
    `${phrase}`.toLowerCase().includes(searchInput.toLowerCase())
  );
};
