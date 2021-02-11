export const handleSaveDataToLocal = (data) => {
  localStorage.setItem("allLocalPhrases", JSON.stringify(data));
};

export const handleLastPhraseToLocal = (data) => {
  localStorage.setItem("localNewPhrase", JSON.stringify(data));
};
