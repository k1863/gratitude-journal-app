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
    console.log("passed one phrase to local");
  };

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
            <HomePageWithSpinner isLoading={isLoading} {...props} />
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
