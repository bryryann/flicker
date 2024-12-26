import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AccessPage from "./pages/AccessPage";
import Homepage from "./pages/Homepage";
import PrivateRoute from "./pages/PrivateRoute";
import OnlyUnauthorized from "./pages/OnlyUnauthorized";
import MovieGrid from "./components/MovieGrid";
import MovieList from "./components/MovieList";
import "./global.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate replace={true} to="/access" />} />
        <Route path="/app" element={<PrivateRoute><Homepage /></PrivateRoute>}>
          <Route index element={<MovieGrid variant="trending" />} />
          <Route path="favorites" element={<MovieList />} />
          <Route path="watchlist" element={<p>watchlist component here...</p>} />
        </Route>
        <Route path="/access" element={<OnlyUnauthorized><AccessPage /></OnlyUnauthorized>} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
