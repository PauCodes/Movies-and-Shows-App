import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {


    const url = 'https://api.themoviedb.org/';
    const key = '4088273d8a680cca4969b5d5cca32501';   
        

    const topRatedMoviesUrl = '3/movie/top_rated';
    const upcomingMoviesUrl = '3/movie/upcoming';
    const moviesGenreNameUrl = '3/genre/movie/list';
    const moviesByGenreUrl = '3/discover/movie';


    const [ showTopRatedMovies, setShowTopRatedMovies ] = useState([]);
    const [ showUpcomingMovies, setShowUpcomingMovies ] = useState([]);
    const [ genreCategories, setGenreCategories ] = useState([]);
    const [ movieCategoryChoice, setMovieCategoryChoice ] = useState([]);
    const [ movieGenreId, setMovieGenreId ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ itemSelected, setItemSelected ] = useState(null);
  
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
                for ( let i = 0; i < 12; i++) {
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

            for (let i = 0; i < 12; i++ ) {
                upcomingMovies.push(upcomingMoviesDataArray[i]);
            }
            setShowUpcomingMovies(upcomingMovies);                
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   
    const handleCategoryChange = (e) => {
        setMovieGenreId(e.target.value);     
    };

    const handleMovieGenreSubmit = (e) => {
        e.preventDefault();
    };

    //API CALL TO Populate genre select
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${url}${moviesGenreNameUrl}`,
            params: {
                api_key: key,
            }
        }).then((apiData) => {            
            setGenreCategories(apiData.data.genres);  
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    //API CALL TO Display movies by genre
    useEffect(() => {
        const movieChoiceList = [];

        if(movieGenreId){
            axios({
                method: 'GET',
                url: `${url}${moviesByGenreUrl}`,
                params: {
                    api_key: key,
                    with_genres: movieGenreId
                }
            }).then((apiData) => {               
                const movieChoiceDataArray = apiData.data.results;
                for(let i = 0; i < 12; i++) {
                    movieChoiceList.push(movieChoiceDataArray[i]);
                }
                setMovieCategoryChoice(movieChoiceList);
                
            });
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieGenreId]);   
    
    const showInfoHandler = (elValue) => {
        setShowModal(true);
        setItemSelected(elValue);        
    };

    const closeMoreInfoHandler = () => {
        setShowModal(false);
    };


    return (
        <MovieContext.Provider value={{
          showTopRatedMovies,
          showUpcomingMovies,
          genreCategories,
          handleCategoryChange,
          handleMovieGenreSubmit,
          movieCategoryChoice,
          setMovieCategoryChoice,
          showInfoHandler,
          closeMoreInfoHandler,
          showModal, 
          itemSelected
        }}
        >
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContext;
