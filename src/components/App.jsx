import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Homepage';
import Movies from './pages/MoviesPage/MoviesPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};
