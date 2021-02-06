import React, { Component } from "react";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  state = {
    allPhrases: [] || "",
  };

  async componentDidMount() {
    try {
      const resp = await axios.get("/phrases");
      this.setState({
        allPhrases: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.currentPhrase);
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

export default App;
