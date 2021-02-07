import React, { useEffect, useState } from "react";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState({ allPhrases: [] });

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("/phrases");

      setData(resp.data);
    };

    fetchData();
  }, []);

  const handleSaveDataToLocal = (data) => {
    localStorage.setItem("allLocalPhrases", JSON.stringify(data));
  };

  const handleLastPhraseToLocal = (newPhrase) => {
    localStorage.setItem("localNewPhrase", JSON.stringify(data));
  };

  /*  handleSaveFetchedPhrasesToLocalPhrases = (newPhrases) => {
    //setting relevant pieces of state to variable
    // let currentPhraseState = this.state.currentPhrase;

    if (this.state.allPhrases?.includes(newPhrases)) {
      const phrasesInState = this.state.allPhrases;
      //  creating variable representing current saved phrase
      let newCurrentPhrases = [...phrasesInState, newPhrases];

      //  updating React state with variable:
      this.setState({
        localPhrases: newCurrentPhrases,
      });

      //  updating localStorage state with same variable:
      ls.set("localPhrases", newCurrentPhrases);
    }

    let newPhrase = this.state.allPhrases.slice(0).pop();

    if (!this.state.currentPhrase.includes(newPhrase)) {
      //  creating variable representing current saved phrase
      let newCurrentPhrase = [newPhrase];

      //  updating React state with variable:
      this.setState({
        currentPhrase: newCurrentPhrase,
      });

      //  updating localStorage state with same variable:
      ls.set("currentPhrase", newCurrentPhrase);
    }
  }; */

  // console.log(localPhrases);
  // let currentLastPhrase = localPhrases.slice(0).pop().phrase;
  // console.log(currentLastPhrase);
  console.log(data);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route
          exact
          path="/home"
          render={() => (
            <HomePage
              allPhrases={data}
              handleSaveDataToLocal={handleSaveDataToLocal}
              handleLastPhraseToLocal={handleLastPhraseToLocal}
            />
          )}
        />
        <Route
          exact
          path="/create"
          render={() => (
            <CreatePage
              allPhrases={data}
              handleLastPhraseToLocal={handleLastPhraseToLocal}
              handleSaveDataToLocal={handleSaveDataToLocal}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
