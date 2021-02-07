import React from "react";
import sprite from "../../svg-icons/sprite.svg";

import TextAreaForm from "../../components/textArea/TextAreaForm";

import "../../sass/style.scss";

function CreatePage({ allPhrases, handleLastPhraseToLocal }) {
  const onSubmit = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phrase: data,
      }),
    };

    await fetch("/phrases", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  /* handleSaveLastPhraseToCurrentPhrase = (newPhrase) => {
    //setting relevant pieces of state to variable
    // let currentPhraseState = this.state.currentPhrase;

    if (!this.state.currentPhrase.includes(newPhrase)) {
      //  creating variable representing current saved phrase
      let newCurrentPhrase = [newPhrase];

      //  updating React state with variable:
      this.setState({
        currentPhrase: newCurrentPhrase,
      });

      //  updating localStorage state with same variable:
      ls.set("currentPhrase", newCurrentPhrase);
    }
  }; */

  /* console.log(this.state.allPhrases);
    console.log(this.state.currentPhrase); */
  /*    var localPhrases = ls.get("currentPhrase");
    console.log(localPhrases); */
  let currentLastPhrase = JSON.parse(localStorage.getItem("localNewPhrase"));

  return (
    <div className="create-page">
      <h2 className="header-medium">Today I am grateful for..</h2>
      <p className="paragraph-secondary">4 Feb 2021, 02:38 PM</p>
      <div className="create-page__img-box">
        <svg className="create-page__img" viewBox="3 3 26 26">
          <use href={sprite + "#Notes-bro"}></use>
        </svg>
      </div>
      {!currentLastPhrase ? (
        <TextAreaForm
          onSubmit={onSubmit}
          handleLastPhraseToLocal={handleLastPhraseToLocal}
        />
      ) : (
        <TextAreaForm
          onSubmit={onSubmit}
          currentLastPhrase={currentLastPhrase}
          handleLastPhraseToLocal={handleLastPhraseToLocal}
        />
      )}
    </div>
  );
}

export default CreatePage;
