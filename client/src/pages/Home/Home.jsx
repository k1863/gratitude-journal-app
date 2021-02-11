import React, { useState } from "react";
import sprite from "../../svg-icons/sprite.svg";
import Moment from "react-moment";
import "moment-timezone";
import PhraseList from "../../components/PhrasesList/PhrasesList";

import { Link } from "react-router-dom";

import "../../sass/style.scss";

export default function Home() {
  const [searchInput, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setInput(searchValue);
  };

  const allLocalPhrasesArr = JSON.parse(
    localStorage.getItem("allLocalPhrases")
  );
  /*   console.log(allLocalPhrasesArr[0]); */
  let allLocalPhrases = allLocalPhrasesArr[0];
  const lastPost = allLocalPhrasesArr?.slice(0).pop();

  const newPost = JSON.parse(localStorage.getItem("localNewPhrase"));

  /*   const localNewPhrase = JSON.parse(localStorage.getItem("localNewPhrase")); */

  const searchResults = allLocalPhrasesArr?.filter((item) =>
    item?.phrase?.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log(allLocalPhrases);
  return (
    <div className="home-page">
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

              <p className="gratitude-text">
                {newPost ? newPost.phrase : lastPost.phrase}
              </p>
              <span className="home-page__date">
                Last update
                <Moment format="MMM Do YYYY">
                  {newPost ? newPost.createdAt : lastPost.createdAt}
                </Moment>
              </span>
              <Link to="/create">
                {!allLocalPhrases ? (
                  <button className="home-page__btn btn">&#43; Create</button>
                ) : (
                  <button className="home-page__btn btn"> Edit</button>
                )}
              </Link>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
