import React, { Component } from "react";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/create" component={CreatePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
