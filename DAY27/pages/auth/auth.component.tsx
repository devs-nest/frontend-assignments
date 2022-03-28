import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import "./auth.styles.scss";

interface IProps {
  isSignIn: boolean;
}

const Auth: React.FC<IProps> = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Auth;
