import React, { Component } from "react";
import sprite from "../../svg-icons/sprite.svg";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../sass/style.scss";

class Home extends Component {
  state = {
    phrase: [],
  };

  componentDidMount() {
    axios
      .get("/phrases")
      .then((res) => {
        this.setState({ phrase: res.data });
      })
      .catch((err) => {
        // what now?
        console.log(err);
      });
  }
  render() {
    console.log(this.state);
    // const gratitudePhrase =
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
        {!this.state ? (
          <h2 h2 className="header-medium">
            What are you grateful for?
          </h2>
        ) : (
          <h2 h2 className="header-medium">
            What are you grateful for?
          </h2>
        )}

        <Link to="/create">
          <button className="home-page__btn btn">&#43; Create</button>
        </Link>
      </div>
    );
  }
}

export default Home;
