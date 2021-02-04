import React, { Component } from "react";
import sprite from "../svg-icons/sprite.svg";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <header>
          <h2 className="heading-secondary">Gratitude Journal</h2>
          <svg className="triple-dots">
            <use href={sprite + "#dots-horizontal-triple"}></use>
          </svg>
        </header>
        <div className="search-section">
          <svg className="calendar ">
            <use href={sprite + "#search"}></use>
          </svg>
          <input type="text" name="searchInput" id="searchInput" />
        </div>
        <svg className="calendar">
          <use href={sprite + "#calendar-alt-fill"}></use>
        </svg>
        <h2 className="heading-secondary">What are you grateful for?</h2>
        <svg className="home-page__img">
          <use href={sprite + "#Left hander-cuate"}></use>
        </svg>
        <button className="btn">&plus; Create</button>
      </div>
    );
  }
}

export default Home;
