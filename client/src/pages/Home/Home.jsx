import React, { useEffect, useState } from "react";
import sprite from "../../svg-icons/sprite.svg";
import PhraseList from "../../components/PhrasesList/PhrasesList";

import { Link } from "react-router-dom";

import "../../sass/style.scss";

export default function Home() {
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
  const allLocalPhrases = JSON.parse(localStorage.getItem("allLocalPhrases"));

  console.log(allLocalPhrases);
  const localNewPhrase = JSON.parse(localStorage.getItem("localNewPhrase"));

  console.log(localNewPhrase);

  const searchResults = allLocalPhrases?.filter((item) =>
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
          searchResults={searchResults}
          allLocalPhrases={allLocalPhrases}
        />
      ) : (
        <div className="home-page__main-section">
          <svg className="home-page__img" viewBox="0 0 100 100">
            <use href={sprite + "#Left hander-cuate"}></use>
          </svg>
          {!localNewPhrase ? (
            <h2 className="header-medium">What are you grateful for today?</h2>
          ) : (
            <p className="gratitude-text">{localNewPhrase.phrase}</p>
          )}

          <Link to="/create">
            {!localNewPhrase ? (
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
