import React from "react";
import sprite from "../svg-icons/sprite.svg";

const Splash = () => {
  return (
    <div className="splash-page">
      <h1 className="heading-primary">
        Gratitude <br></br> Journal
      </h1>
      <svg className="splash-page__img">
        <use href={sprite + "#Notebook-bro"}></use>
      </svg>

      <h2 className="heading-secondary">Welcome</h2>
      <p className="paragraph">
        What are you grateful for today? Capture that on a simple phrase and
        save it. View gratitude statements from a previous day through the
        calendar.
      </p>
      <button className="btn">&rarr; Let's Start</button>
    </div>
  );
};

export default Splash;
