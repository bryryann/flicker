import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AccessPage from "./pages/AccessPage";
import Homepage from "./pages/Homepage";
import PrivateRoute from "./pages/PrivateRoute";
import OnlyUnauthorized from "./pages/OnlyUnauthorized";
import "./global.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace={true} to="/access" />} />
          <Route path="/app" element={<PrivateRoute><Homepage /></PrivateRoute>} />
          <Route path="/access" element={<OnlyUnauthorized><AccessPage /></OnlyUnauthorized>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
