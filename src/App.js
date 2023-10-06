import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comedymovies from "./Comedymovies";
import Navbar1 from "./Navbar1";
import Popularmovies from "./Popularmovies";
import Latestmovies from "./Latestmovies";
import Home from "./Home";
import View from "./View";

function App() {
  return (
    <div>
      <Navbar1 />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comedy" element={<Comedymovies />} />
          <Route path="/popular" element={<Popularmovies />} />
          <Route path="/latest" element={<Latestmovies />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
