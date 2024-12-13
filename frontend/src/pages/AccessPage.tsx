import React, { useState } from "react";
import Button from "../components/Button";
import LoginForm from "../components/access/LoginForm";
import SignUpForm from "../components/access/SignUpForm";

const AccessPage: React.FC = () => {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const content =
    displayLogin
      ? <LoginForm />
      : <SignUpForm />

  const toggleDisplay = () => { setDisplayLogin(prev => !prev); };

  return (
    <>
      {content}
      <Button
        variant="default"
        onClick={toggleDisplay}
      >
        Toggle
      </Button>
    </>
  )
};

export default AccessPage;
