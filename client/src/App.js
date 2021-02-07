import React, { useEffect, useState } from "react";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import { Switch, Route } from "react-router-dom";
import LoadSpinner from "./components/LoadingSpinner/LoadingSpinner.jsx";
import axios from "axios";

const HomePageWithSpinner = LoadSpinner(HomePage);
function App() {
  const [data, setData] = useState({ allPhrases: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("/phrases");

      setData(resp.data);
      setIsLoading(false);
      handleSaveDataToLocal(resp.data);
    };

    fetchData();
  }, []);

  const handleSaveDataToLocal = (data) => {
    localStorage.setItem("allLocalPhrases", JSON.stringify(data));
    console.log("passedDataToLocal");
  };

  const handleLastPhraseToLocal = (data) => {
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
  console.log(isLoading);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route
          exact
          path="/home"
          render={(props) => (
            <HomePageWithSpinner
              isLoading={isLoading}
              allPhrases={data}
              handleSaveDataToLocal={handleSaveDataToLocal}
              handleLastPhraseToLocal={handleLastPhraseToLocal}
              {...props}
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
