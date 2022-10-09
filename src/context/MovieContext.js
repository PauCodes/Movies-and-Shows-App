import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {

    const url = process.env.REACT_APP_BASE_ENDPOINT;
    const key = process.env.REACT_APP_KEY;   
        

    const topRatedMoviesUrl = '3/movie/top_rated';
    const upcomingMoviesUrl = '3/movie/upcoming';
    const moviesGenreNameUrl = '3/genre/movie/list';
    const moviesByGenreUrl = '3/discover/movie';

    // const topRatedShowsUrl = '3/tv/top_rated';

    const [ showTopRatedMovies, setShowTopRatedMovies ] = useState([]);
    const [ showUpcomingMovies, setShowUpcomingMovies ] = useState([]);
    const [ genreCategories, setGenreCategories ] = useState([]);
    const [ movieCategoryChoice, setMovieCategoryChoice ] = useState([]);
    const [ movieGenreId, setMovieGenreId ] = useState(null)
    // const [ topRatedShows, setTopRatedShows ] = useState([]);
    

    //------------------------------- MOVIES -------------------------
    //API CALL FOR TOP RATED MOVIES
     useEffect(() => {
        const topRatedMovie = [];
            axios({
                method: 'GET',
                url: `${url}${topRatedMoviesUrl}`,
                params: {
                    api_key: key,
                }
            }).then((apiData) => {
                const topRatedMoviesDataArray = apiData.data.results;            
               
                // THIS FOR LOOP CREATES A NEW ARRAY WITH 10 ITEMS
                for ( let i = 0; i < 10; i++) {
                    topRatedMovie.push(topRatedMoviesDataArray[i]);
                }   
                setShowTopRatedMovies(topRatedMovie);            
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    //API CALL FOR UPCOMING MOVIES
    useEffect(() => {
        const upcomingMovies = [];
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //API CALL FOR MOVIES BY GENRE
    const handleCategoryChange = (e) => {
        setMovieGenreId(e.target.value);     
    };

    const handleMovieGenreSubmit = (e) => {
        e.preventDefault();
    }

    //Populate genre select
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${url}${moviesGenreNameUrl}`,
            params: {
                api_key: key,
                // id: movieCategoryChoice
            }
        }).then((apiData) => {            
            setGenreCategories(apiData.data.genres);  
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    //Display movies by genre
    useEffect(() => {
        if(movieGenreId){
            axios({
                method: 'GET',
                url: `${url}${moviesByGenreUrl}`,
                params: {
                    api_key: key,
                    with_genres: movieGenreId
                }
            }).then((apiData) => {            
                setMovieCategoryChoice(apiData.data.results);    
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieGenreId]);    
   

    //------------------------------- MOVIES -------------------------

    
    //------------------------------- SHOWS -------------------------
    //API CALL FOR TOP RATED SHOWS
    // useEffect(() => {
    //         axios({
    //             method: 'GET',
    //             url: `${url}${topRatedShowsUrl}`,
    //             params: {
    //                 api_key: key,
    //                 page: 1,
    //             }
    //         }).then((apiData) => {  
    //             const topRatedShowsDataArray = apiData.data.results;   
    //             const topRatedShowsArray = topRatedShowsDataArray.filter((el, index) => {
    //                 return index < 10;
    //             })
    //             setTopRatedShows(topRatedShowsArray);          
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, []);

    //------------------------------- SHOWS -------------------------

    return (
        <MovieContext.Provider value={{
          showTopRatedMovies,
          showUpcomingMovies,
          genreCategories,
          handleCategoryChange,
          handleMovieGenreSubmit,
          movieCategoryChoice,
        //   topRatedShows

        }}
        >
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContext;