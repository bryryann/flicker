import React, { useState } from "react";
import Button from "../components/Button";

const AccessPage: React.FC = () => {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const content =
    displayLogin
      ? <p>Login here</p>
      : <p>Sign Up here</p>

  const toggleDisplay = () => { setDisplayLogin(prev => !prev); };

  return (
    <>
      {content}
      <Button
        variant="default"
        content="Toggle"
        onClick={toggleDisplay}
      />
    </>
  )
};

export default AccessPage;
