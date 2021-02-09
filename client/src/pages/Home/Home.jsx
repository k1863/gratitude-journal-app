import React, { useState } from "react";
import sprite from "../../svg-icons/sprite.svg";
import logoutSprite from "../../svg-icons/logoutSprite.svg";
import Moment from "react-moment";
import "moment-timezone";
import PhraseList from "../../components/PhrasesList/PhrasesList";
import { auth } from "../../firebase/firebaseUtils.js";

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

  const allLocalPhrasesArr = JSON.parse(
    localStorage.getItem("allLocalPhrases")
  );
  console.log(allLocalPhrasesArr[0]);
  let allLocalPhrases = allLocalPhrasesArr[0];
  /*   const localNewPhrase = JSON.parse(localStorage.getItem("localNewPhrase")); */

  const searchResults = allLocalPhrasesArr?.filter((item) =>
    item?.phrase?.toLowerCase().includes(searchInput.toLowerCase())
  );

  const today = Date.now();
  console.log(today);
  return (
    <div className="home-page">
      <header>
        <h2>Gratitude Journal</h2>
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
        <div className="logout-wrapper" onClick={() => auth.signOut()}>
          <svg className="home-page__triple-dots">
            <use href={logoutSprite + "#log-out"}></use>
          </svg>
        </div>

        {/*  <svg className="home-page__calendar">
          <use href={sprite + "#calendar-alt-fill"}></use>
        </svg> */}
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
          {!allLocalPhrases ? (
            <h2 className="header-medium">What are you grateful for today?</h2>
          ) : (
            <span>
              <h2 className="header-medium">Today I am grateful for..</h2>
              <Moment className="home-page__date" format="MMM Do YYYY">
                {allLocalPhrases.createdAt}
              </Moment>
              <p className="gratitude-text">{allLocalPhrases.phrase}</p>
            </span>
          )}

          <Link to="/create">
            {!allLocalPhrases ? (
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
