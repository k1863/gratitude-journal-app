import React, { Component } from "react";
import sprite from "../svg-icons/sprite.svg";

import "../../sass/style.scss";

class Create extends Component {
  render() {
    return (
      <div className="create-page">
        <h2 className="heading-secondary">Today I am grateful for..</h2>
        <p className="paragraph-secondary">4 Feb 2021, 02:38 PM</p>
        <div className="create-page__phrase">
          <p className="paragraph">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <svg className="create-page__img">
          <use href={sprite + "#Notes-bro"}></use>
        </svg>
        <button className="btn"> &#10003;Save</button>
      </div>
    );
  }
}

export default Create;
