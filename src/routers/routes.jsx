import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

function MyRoutes() {
  return (
    <Router>
        <header>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h1 className="title">&#127916; Movies</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
