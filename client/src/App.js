import React, { Component } from "react";
import { connect } from "react-redux";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { createStructuredSelector } from "reselect";
import { selectPhrases } from "./redux/phrasesCollection/phasesCollectionSelector";
import { updateCollections } from "./redux/phrasesCollection/phrasesCollectionActions";

class App extends Component {
  state = {
    allPhrases: [] || "",
  };

  async componentDidMount() {
    try {
      const resp = await axios.get("/phrases");
      this.setState({ allPhrases: resp.data });
    } catch (error) {
      console.log(error);
    }
  }

  /*  axios
      .get("/phrases")
      .then((res) => {
        this.setState({ allPhrases: res.data });
      })
      .catch((err) => {
        // what now?
        console.log(err);
      }); */

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route
            exact
            path="/home"
            render={() => (
              <HomePage lastPhrase={this.state.allPhrases?.slice().pop()} />
            )}
          />
          <Route
            exact
            path="/create"
            render={() => <CreatePage allPhrases={this.state.allPhrases} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allPhrases: selectPhrases,
});
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (phrasesMap) => dispatch(updateCollections(phrasesMap)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
