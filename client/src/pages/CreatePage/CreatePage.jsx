import React, { Component } from "react";
import sprite from "../../svg-icons/sprite.svg";
import ls from "local-storage";

import TextAreaForm from "../../components/textArea/TextAreaForm";

import "../../sass/style.scss";

class CreatePage extends Component {
  state = {
    phrase: "",
    allPhrases: [] || "",
    currentPhrase: "" || [],
  };

  onSubmit = async (data) => {
    this.setState({
      phrase: data.phrase,
      allPhrases: data,
      currentPhrase: ls.get("currentPhrase" || []),
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phrase: this.state.phrase,
      }),
    };

    await fetch("/phrases", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  handleSaveLastPhraseToCurrentPhrase = (newPhrase) => {
    //setting relevant pieces of state to variable
    let currentPhraseState = this.state.currentPhrase;

    if (!this.state.currentPhrase.includes(newPhrase)) {
      //  creating variable representing current saved phrase
      let newCurrentPhrase = [...currentPhraseState, newPhrase];

      //  updating React state with variable:
      this.setState({
        currentPhrase: newCurrentPhrase,
      });

      //  updating localStorage state with same variable:
      ls.set("currentPhrase", newCurrentPhrase);
    }
  };
  render() {
    console.log(this.state.allPhrases);
    console.log(this.state.currentPhrase);
    var localPhrases = ls.get("currentPhrase");
    console.log(localPhrases);

    const currentLastPhrase = localPhrases.slice(0).pop();
    console.log(currentLastPhrase);
    return (
      <div className="create-page">
        <h2 className="header-medium">Today I am grateful for..</h2>
        <p className="paragraph-secondary">4 Feb 2021, 02:38 PM</p>
        <div className="create-page__img-box">
          <svg className="create-page__img" viewBox="3 3 26 26">
            <use href={sprite + "#Notes-bro"}></use>
          </svg>
        </div>
        {currentLastPhrase ? (
          <TextAreaForm
            handleSaveLastPhraseToCurrentPhrase={
              this.handleSaveLastPhraseToCurrentPhrase
            }
            onSubmit={this.onSubmit}
            lastPhrase={currentLastPhrase}
          />
        ) : (
          <TextAreaForm onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}

export default CreatePage;
