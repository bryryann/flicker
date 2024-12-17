import { useState } from "react";
import Button from "../../components/Button";
import LoginForm from "../../components/access/LoginForm";
import SignUpForm from "../../components/access/SignUpForm";
import "./style.css";

const AccessPage: React.FC = () => {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const content =
    displayLogin
      ? <LoginForm />
      : <SignUpForm />

  const toggleContent =
    displayLogin
      ? "Don't have an account? "
      : "Already registered? "

  const headerContent =
    displayLogin
      ? "Log In"
      : "Sign up"

  const headerParagraph =
    displayLogin
      ? "We're glad to have you back"
      : "Review and discuss everything movie related!"

  const toggleDisplay = () => { setDisplayLogin(prev => !prev); };

  return (
    <div className="container">
      <div className="image-container">
      </div>
      <div className="form-container">
        <div className="form-header">
          <h2 className="header">{headerContent}</h2>
          <p className="paragraph">{headerParagraph}</p>
        </div>
        {content}
        <div className="toggle-container">
          {toggleContent}
          <Button
            variant="borderless"
            onClick={toggleDisplay}
          >
            {displayLogin ? "Sign up now" : "Log In"}
          </Button>
        </div>
      </div>
    </div>
  )
};

export default AccessPage;
