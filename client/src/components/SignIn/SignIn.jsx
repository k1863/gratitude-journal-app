import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtils.js";

import "../../sass/style.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-page">
        <h1 className="header-primary">Gratitude Journal</h1>
        <h2 className="header-medium">Sign In</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit" className="sign-btn">
            Sign In
          </CustomButton>
          <p className="sign-in-option"> or </p>
          <CustomButton
            onClick={signInWithGoogle}
            type="button"
            className="sign-btn"
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </form>

        <h2 className="header-tertiary">
          Don't have an account?{" "}
          <span
            className="account-link"
            onClick={this.props.handleCreateAccount}
          >
            Create account
          </span>
        </h2>
      </div>
    );
  }
}

export default SignIn;
