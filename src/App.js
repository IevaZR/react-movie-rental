import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import YourMoviesPage from "./Pages/YourMoviesPage/YourMoviesPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { ActiveUserProvider } from "./HelperFunctions/ActiveUserContext";

function App() {
  return (
    <div className="App">
      <ActiveUserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/your-movies-page" element={<YourMoviesPage />} />
        </Routes>
      </ActiveUserProvider>
    </div>
  );
}

export default App;
