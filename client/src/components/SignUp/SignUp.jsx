import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebaseUtils.js";
import "../../sass/style.scss";

class SignUpComponent extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, password, email, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1>Gratitude Journal</h1>
        <h2 className="header-medium">Sign In</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            onChange={this.handleChange}
            value={displayName}
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={email}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit" className="sign-btn">
            Sign In
          </CustomButton>
        </form>

        <h2 className="header-tertiary">
          Already have an account?
          <span onClick={this.props.handleSignIn} className="account-link">
            {" "}
            Sign In{" "}
          </span>
        </h2>
      </div>
    );
  }
}

export default SignUpComponent;
