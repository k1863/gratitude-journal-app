import React, { Component } from "react";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import HomePage from "./pages/Home/Home.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadSpinner from "./components/LoadingSpinner/LoadingSpinner.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils.js";
import axios from "axios";

const HomePageWithSpinner = LoadSpinner(HomePage);
class App extends Component {
  constructor() {
    super();
    this.state = {
      allPhrases: [],
      isLoading: true,
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  handleSaveDataToLocal = (data) => {
    localStorage.setItem("allLocalPhrases", JSON.stringify(data));
    console.log("passedDataToLocal");
  };

  handleCurrentUserToLocal = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
    console.log("passedcurrentUserToLocal");
  };

  componentDidMount() {
    const fetchData = async () => {
      const resp = await axios.get("/phrases");

      this.setState({ allPhrases: resp.data });
      this.setState({ isLoading: false });
      this.handleSaveDataToLocal(resp.data);

      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapshot) =>
            this.setState(
              {
                currentUser: {
                  id: snapshot.id,
                },
              },
              () => {
                console.log(this.state);
              }
            )
          );
        }

        this.setState({ currentUser: userAuth });
        this.handleCurrentUserToLocal(userAuth);
      });
    };

    fetchData();
  }

  render() {
    const { currentUser, allPhrases, isLoading } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              currentUser ? <Redirect to="/splash" /> : <SignInPage />
            }
          />
          <Route exact path="/splash" component={SplashPage} />
          <Route
            exact
            path="/home"
            render={(props) =>
              !currentUser ? (
                <Redirect to="/" />
              ) : (
                <HomePageWithSpinner isLoading={isLoading} {...props} />
              )
            }
          />
          <Route
            exact
            path="/create"
            render={() =>
              !currentUser ? (
                <Redirect to="/" />
              ) : (
                <CreatePage
                  allPhrases={allPhrases}
                  currentUser={currentUser}
                  /*    handleLastPhraseToLocal={handleLastPhraseToLocal}
              handleSaveDataToLocal={handleSaveDataToLocal} */
                />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
export default App;
