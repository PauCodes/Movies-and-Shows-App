import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {

    const url = process.env.REACT_APP_BASE_ENDPOINT;
    const key = process.env.REACT_APP_KEY;

    const topRatedMoviesUrl = '3/movie/top_rated';
    const topRatedMovie = [];

    const upcomingMoviesUrl = '3/movie/upcoming';
    const upcomingMovies = [];

    const moviesByGenreUrl = '3/genre/movie/list';

    const topRatedShowsUrl = '3/tv/top_rated';
    const topRatedShowsArray = [];

    const [ showTopRatedMovies, setShowTopRatedMovies ] = useState([]);
    const [ showUpcomingMovies, setShowUpcomingMovies ] = useState([]);
    const [ showMoviesByGenre, setShowMoviesByGenre ] = useState([]);
    const [ topRatedShows, setTopRatedShows ] = useState([]);

    //------------------------------- MOVIES -------------------------
    //API CALL FOR TOP RATED MOVIES
    const fetchTopRatedMovies = () => {
        axios({
            method: 'GET',
            url: `${url}${topRatedMoviesUrl}`,
            params: {
                api_key: key,
                // total_results: 10
            }
        }).then((apiData) => {
            const topRatedMoviesDataArray = apiData.data.results;
           
            // THIS FOR LOOP CREATES A NEW ARRAY WITH 10 ITEMS
            for ( let i = 0; i < 10; i++) {
                topRatedMovie.push(topRatedMoviesDataArray[i]);
            }   
            setShowTopRatedMovies(topRatedMovie);            
        });
    };

    //API CALL FOR UPCOMING MOVIES
    const fetchUpcomingMovies = () => {
        axios({
            method: 'GET',
            url: `${url}${upcomingMoviesUrl}`,
            params: {
                api_key: key,
            }
        }).then((apiData) => {
            const upcomingMoviesDataArray = apiData.data.results;

            for (let i = 0; i < 10; i++ ) {
                upcomingMovies.push(upcomingMoviesDataArray[i]);
            }
            setShowUpcomingMovies(upcomingMovies);    
        });
    };


    //API CALL FOR MOVIES BY GENRE
    const fetchMoviesByGenre = () => {
        axios({
            method: 'GET',
            url: `${url}${moviesByGenreUrl}`,
            params: {
                api_key: key,
                name: 'Action'
            }
        }).then((apiData) => {            
            setShowMoviesByGenre( apiData.data.genres);    
        });
    };

    //------------------------------- MOVIES -------------------------

    //------------------------------- SHOWS -------------------------
    const fetchTopRatedShows = () => {
        axios({
            method: 'GET',
            url: `${url}${topRatedShowsUrl}`,
            params: {
                api_key: key,
                name: 'Action'
            }
        }).then((apiData) => {  
            const topRatedShowsDataArray = apiData.data.results;

            for (let i = 0; i < 10; i++) {
                topRatedShowsArray.push(topRatedShowsDataArray);
            };
            setTopRatedShows(topRatedShowsArray);   
        
        });
    };

    //------------------------------- SHOWS -------------------------

    return (
        <MovieContext.Provider value={{
          fetchTopRatedMovies,
          showTopRatedMovies,
          fetchUpcomingMovies,
          showUpcomingMovies,
          fetchMoviesByGenre,
          showMoviesByGenre,
          fetchTopRatedShows,
          topRatedShows

        }}
        >
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContext;