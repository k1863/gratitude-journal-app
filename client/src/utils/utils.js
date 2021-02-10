export const handleSaveDataToLocal = (data) => {
  localStorage.setItem("allLocalPhrases", JSON.stringify(data));
  console.log("passedDataToLocal");
};

export const handleLastPhraseToLocal = (data) => {
  localStorage.setItem("localNewPhrase", JSON.stringify(data));
  console.log("passed one phrase to local");
};
