import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import YourMoviesPage from "./Pages/YourMoviesPage/YourMoviesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/your-movies-page" element={<YourMoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
