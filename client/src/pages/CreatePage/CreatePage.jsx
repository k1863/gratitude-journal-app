import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import { Link } from "react-router-dom";

import TextAreaForm from "../../components/textArea/TextAreaForm";

import "../../sass/style.scss";

function CreatePage({ handleLastPhraseToLocal, handleSaveDataToLocal }) {
  const onSubmit = async (data) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phrase: data.phrase,
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
      {/*   <p className="paragraph-secondary">4 Feb 2021, 02:38 PM</p> */}
      <div className="create-page__img-box">
        <svg className="create-page__img" viewBox="0 0 100 100">
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
          handleSaveDataToLocal={handleSaveDataToLocal}
        />
      )}
      <Link to="/home">
        <span className="create-page__back-arrow">&#8592;</span>
      </Link>
    </div>
  );
}

export default CreatePage;
