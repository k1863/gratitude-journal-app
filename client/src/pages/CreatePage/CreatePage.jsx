import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import { Link } from "react-router-dom";

import TextAreaForm from "../../components/textArea/TextAreaForm";

import "../../sass/style.scss";

function CreatePage() {
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
      .catch((err) => console.log(err));
  };

  let localNewPhrase = JSON.parse(localStorage.getItem("localNewPhrase"))
    ?.phrase;

  return (
    <div className="create-page">
      <div className="create-page__img-box">
        <svg className="create-page__img" viewBox="0 0 100 100">
          <use href={sprite + "#Notes-bro"}></use>
        </svg>
      </div>
      <div className="create-page__main">
        <h3 className="header-medium">Today I am grateful for..</h3>

        {localNewPhrase ? (
          <TextAreaForm onSubmit={onSubmit} localNewPhrase={localNewPhrase} />
        ) : (
          <TextAreaForm onSubmit={onSubmit} localNewPhrase={localNewPhrase} />
        )}
      </div>
      <Link to="/home">
        <span className="create-page__back-arrow arrow left">&#8592;</span>
      </Link>
    </div>
  );
}

export default CreatePage;
