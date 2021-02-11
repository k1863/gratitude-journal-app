import React from "react";
import sprite from "../../svg-icons/sprite.svg";

import { Link } from "react-router-dom";

import "../../sass/style.scss";

const Splash = () => {
  return (
    <div className="splash-page">
      <svg className="splash-page__img" viewBox="0 0 100 100">
        <use href={sprite + "#Notebook-bro"}></use>
      </svg>
      <div className="splash-page__main-wrapper">
        {" "}
        <h2 className="header-medium">Welcome</h2>
        <p className="paragraph">
          What are you grateful for today? Capture that on a simple phrase and
          save it. View gratitude statements from a previous day through the
          calendar.
        </p>
        <Link to="/home">
          <button className="btn splash-page__btn">&rarr; Let's Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;
