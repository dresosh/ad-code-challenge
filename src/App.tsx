import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cats from "./Components/Cats";
import Favorite from "./Components/Favorite";
import Dogs from "./Components/Dogs";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <header className="sm:flex sm:flex-wrap items-center justify-between w-full py-4 sm:py-4 px-4 text-lg text-white bg-sky-800">
          <div className="logo text-center font-medium text-2xl md:text-3xl mb-1 sm:text-left sm:mb-0">
            <Link className="no-underline" to={"/"}>
              I<span>&#10084;</span>Pets
            </Link>
          </div>
          <div className="sm:flex">
            <nav className="flex justify-around px-4">
              <span className="px-2">
                <Link className="navbar-link no-underline" to={"/cats"}>
                  Cats
                </Link>
              </span>
              <span className="px-2">
                <Link className="navbar-link no-underline" to={"/dogs"}>
                  Dogs
                </Link>
              </span>
              <span className="px-2">
                <Link className="navbar-link no-underline" to={"/favorites"}>
                  Favorites
                </Link>
              </span>
            </nav>
          </div>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cats" element={<Cats />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
