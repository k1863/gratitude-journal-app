import React, { Component } from "react";
import sprite from "../../svg-icons/sprite.svg";

import TextAreaForm from "../../components/textArea/TextAreaForm";

import "../../sass/style.scss";

class CreatePage extends Component {
  state = {
    phrase: "",
  };

  onSubmit = async (data) => {
    this.setState({
      phrase: data.phrase,
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

  render() {
    const allPhrases = this.props.allPhrases;
    console.log(allPhrases);

    const lastPhrase = allPhrases?.slice().pop();
    return (
      <div className="create-page">
        <h2 className="header-medium">Today I am grateful for..</h2>
        <p className="paragraph-secondary">4 Feb 2021, 02:38 PM</p>
        <div className="create-page__img-box">
          <svg className="create-page__img" viewBox="3 3 26 26">
            <use href={sprite + "#Notes-bro"}></use>
          </svg>
        </div>
        {lastPhrase ? (
          <TextAreaForm onSubmit={this.onSubmit} lastPhrase={lastPhrase} />
        ) : (
          <TextAreaForm onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}

export default CreatePage;
