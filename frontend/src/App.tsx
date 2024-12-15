import React from "react";
import AccessPage from "./pages/AccessPage";
import { useAppSelector } from "./store/store";
import "./global.css";

const App: React.FC = () => {
  const user = useAppSelector(state => state.user);
  console.log(user);
  return (
    <AccessPage />
  );
};

export default App;
