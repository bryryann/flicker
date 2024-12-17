import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessPage from "./pages/AccessPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import { useAppSelector } from "./redux/store";
import "./global.css";

const App: React.FC = () => {
  const user = useAppSelector(state => state.user);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/access" element={<AccessPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
