import React from "react";
import sprite from "../../svg-icons/sprite.svg";

import TextAreaForm from "../../components/textArea/TextAreaForm";

import "../../sass/style.scss";

function CreatePage({ handleLastPhraseToLocal }) {
  const onSubmit = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.parse({
        phrase: data,
      }),
    };

    await fetch("/phrases", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  let localNewPhrase = JSON.parse(localStorage.getItem("localNewPhrase"));

  return (
    <div className="create-page">
      <h2 className="header-medium">Today I am grateful for..</h2>
      <p className="paragraph-secondary">4 Feb 2021, 02:38 PM</p>
      <div className="create-page__img-box">
        <svg className="create-page__img" viewBox="3 3 26 26">
          <use href={sprite + "#Notes-bro"}></use>
        </svg>
      </div>
      {!localNewPhrase ? (
        <TextAreaForm
          onSubmit={onSubmit}
          handleLastPhraseToLocal={handleLastPhraseToLocal}
        />
      ) : (
        <TextAreaForm
          onSubmit={onSubmit}
          localNewPhrase={localNewPhrase}
          handleLastPhraseToLocal={handleLastPhraseToLocal}
        />
      )}
    </div>
  );
}

export default CreatePage;
