import React, { useEffect, useState } from "react";
import sprite from "../../svg-icons/sprite.svg";
import PhraseList from "../../components/PhrasesList/PhrasesList";

import { Link } from "react-router-dom";

import "../../sass/style.scss";

export default function Home({ handleSaveDataToLocal, allPhrases }) {
  const [searchInput, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setInput(searchValue);
    console.log(searchValue);
  };

  /*   useEffect(() => {
    handleSaveDataToLocal(allPhrases);
  });
 */
  const items = JSON.parse(localStorage.getItem("allLocalPhrases"));

  console.log(items);
  const localPhrase = JSON.parse(localStorage.getItem("allLocalPhrases"))
    .phrase;
  let currentPhrase = allPhrases.slice(0).pop().phrase;
  console.log(localPhrase);
  console.log(currentPhrase);
  /*  let localCurrentPhrase = items
    ? items.slice(0).pop().phrase
    : localPhrase.slice(0).pop().phrase; */
  const searchResults = allPhrases?.filter((item) =>
    item.phrase.toLowerCase().includes(searchInput.toLowerCase())
  );

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
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          onChange={handleChange}
        />
        <svg className="home-page__calendar">
          <use href={sprite + "#calendar-alt-fill"}></use>
        </svg>
      </div>
      {searchInput ? (
        <PhraseList
          allPhrases={allPhrases}
          searchResults={searchResults}
          items={items}
        />
      ) : (
        <div className="home-page__main-section">
          <svg className="home-page__img" viewBox="0 0 100 100">
            <use href={sprite + "#Left hander-cuate"}></use>
          </svg>
          {!currentPhrase && !localPhrase ? (
            <h2 className="header-medium">What are you grateful for today?</h2>
          ) : (
            <p className="gratitude-text">{currentPhrase || localPhrase}</p>
          )}

          <Link to="/create">
            {!currentPhrase ? (
              <button className="home-page__btn btn">&#43; Create</button>
            ) : (
              <button className="home-page__btn btn"> Edit</button>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}
