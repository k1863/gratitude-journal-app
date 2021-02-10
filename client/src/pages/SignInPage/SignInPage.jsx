import React, { useState } from "react";
import SignInComponent from "../../components/SignIn/SignIn";
import SignUpComponent from "../../components/SignUp/SignUp";

function SignInPage() {
  const [hide, setHide] = useState(true);

  const handleCreateAccount = () => {
    setHide(false);
  };
  const handleSignIn = () => {
    setHide(true);
  };

  return (
    <div>
      {hide ? (
        <SignInComponent handleCreateAccount={handleCreateAccount} />
      ) : (
        <SignUpComponent handleSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default SignInPage;
