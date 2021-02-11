import React, { useEffect, useState } from "react";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import { handleSaveDataToLocal } from "./utils/utils";
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

  return (
    <div>
      <header>
        <h2>Gratitude Journal</h2>
      </header>
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
          render={() => <CreatePage allPhrases={data} />}
        />
      </Switch>
    </div>
  );
}

export default App;
