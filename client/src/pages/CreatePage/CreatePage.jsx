import React, { Component } from "react";
import sprite from "../../svg-icons/sprite.svg";

import TextAreaForm from "../../components/textArea/TextAreaForm";

import "../../sass/style.scss";

class CreatePage extends Component {
  state = {
    phrase: "",
    time: "",
  };

  onSubmit = (data) => {
    this.setState({
      phrase: data.phrase,
      time: data.time,
    });
  };

  render() {
    return (
      <div className="create-page">
        <h2 className="header-medium">Today I am grateful for..</h2>
        <p className="paragraph-secondary">4 Feb 2021, 02:38 PM</p>
        <div className="create-page__img-box">
          <svg className="create-page__img" viewBox="3 3 26 26">
            <use href={sprite + "#Notes-bro"}></use>
          </svg>
        </div>
        <TextAreaForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default CreatePage;
