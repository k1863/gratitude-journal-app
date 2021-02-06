import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import ls from "local-storage";

import { Link } from "react-router-dom";

import "../../sass/style.scss";

export default function Home({ lastPhrase }) {
  const currentPhrase = ls.get("currentPhrase").slice(0).pop();
  console.log(currentPhrase);
  console.log(lastPhrase);
  return (
    <div className="home-page">
      <header>
        <h2 className="header-medium">Gratitude Journal</h2>
        <svg className="home-page__triple-dots">
          <use href={sprite + "#dots-horizontal-triple"}></use>
        </svg>
      </header>
      <div className="search-section">
        <svg className="home-page__search-icon">
          <use href={sprite + "#search"}></use>
        </svg>
        <input type="text" name="searchInput" id="searchInput" />
        <svg className="home-page__calendar">
          <use href={sprite + "#calendar-alt-fill"}></use>
        </svg>
      </div>
      <svg className="home-page__img" viewBox="0 0 100 100">
        <use href={sprite + "#Left hander-cuate"}></use>
      </svg>
      {!currentPhrase ? (
        <h2 className="header-medium">What are you grateful for today?</h2>
      ) : (
        <p className="gratitude-text">{currentPhrase.phrase}</p>
      )}

      <Link to="/create">
        {!lastPhrase ? (
          <button className="home-page__btn btn">&#43; Create</button>
        ) : (
          <button className="home-page__btn btn"> Edit</button>
        )}
      </Link>
    </div>
  );
}
