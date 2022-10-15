import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Main/Home';
import ByGenreMovies from './components/Movies/ByGenreMovies';
import MoviesSection from './components/Movies/MoviesSection';
import TopRatedMovies from './components/Movies/TopRatedMovies';
import UpcomingMovies from './components/Movies/UpcomingMovies';
import ShowsSection from './components/Shows/ShowsSection';
import BackBtn from './components/UI/BackBtn';
import TopRatedShows from './components/Shows/TopRatedShows';
import { MovieProvider } from './context/MovieContext';
import { ShowProvider } from './context/ShowContext';
import ByGenreShows from './components/Shows/ByGenreShows';

function App() {
  return (
    <MovieProvider>
      <ShowProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>   
          <Route path='/movies' element={<MoviesSection />}/>   
          <Route path='/shows' element={<ShowsSection />}/>
          <Route path='/' element={<BackBtn />}/>
          <Route path='/movies/top_rated' element={<TopRatedMovies />}/>
          <Route path='/movies/upcoming' element={<UpcomingMovies />}/>
          <Route path='/movies/by_genre' element={<ByGenreMovies />}/>
          <Route path='/shows/top_rated' element={<TopRatedShows />}/>
          <Route path='/shows/by_genre' element={<ByGenreShows />}/>
        </Routes>     
      </div>
      </ShowProvider>
    </MovieProvider>
  );
}

export default App;
