import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessPage from "./pages/AccessPage";
import Homepage from "./pages/Homepage";
import PrivateRoute from "./pages/PrivateRoute";
import OnlyUnauthorized from "./pages/OnlyUnauthorized";
import "./global.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<PrivateRoute><Homepage /></PrivateRoute>} />
        <Route path="/access" element={<OnlyUnauthorized><AccessPage /></OnlyUnauthorized>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
