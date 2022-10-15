import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ShowContext  = createContext();

export const ShowProvider = ({children}) => {
    const url = process.env.REACT_APP_BASE_ENDPOINT;
    const key = process.env.REACT_APP_KEY;  

    const topRatedShowsUrl = '3/tv/top_rated';
    const showsGenreNameUrl = '3/genre/tv/list';
    const showsByGenreUrl = '3/discover/tv';

    const [ topRatedShows, setTopRatedShows ] = useState([]);
    const [ genreCategories, setGenreCategories ] = useState([]);
    const [ showCategoryChoice, setShowCategoryChoice ] = useState([]);
    const [ showGenreId, setShowGenreId ] = useState(null);

    const handleCategoryChange = (e) => {
        setShowGenreId(e.target.value);     
    };

    const handleShowGenreSubmit = (e) => {
        e.preventDefault();
    };

     //API CALL FOR TOP RATED SHOWS
     useEffect(() => {
        axios({
            method: 'GET',
            url: `${url}${topRatedShowsUrl}`,
            params: {
                api_key: key,
                page: 1,
            }
        }).then((apiData) => {  
            const topRatedShowsDataArray = apiData.data.results;   
            const topRatedShowsArray = topRatedShowsDataArray.filter((el, index) => {
                return index < 12;
            })
            setTopRatedShows(topRatedShowsArray);          
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //API CALL TO POPULATE GENRE SELECT
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${url}${showsGenreNameUrl}`,
            params: {
                api_key: key,
            }
        }).then ((apiData) => {
            setGenreCategories(apiData.data.genres);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    //API CALL TO Display movies by genre
    useEffect(() => {
        const showChoiceList = [];

        if(showGenreId){
            axios({
                method: 'GET',
                url: `${url}${showsByGenreUrl}`,
                params: {
                    api_key: key,
                    with_genres: showGenreId
                }
            }).then((apiData) => {               
                const showChoiceDataArray = apiData.data.results;
                for(let i = 0; i < 12; i++) {
                    showChoiceList.push(showChoiceDataArray[i]);
                }
                setShowCategoryChoice(showChoiceList);
                
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[showGenreId]); 

    return (
        <ShowContext.Provider value={{
            topRatedShows,
            genreCategories,
            handleCategoryChange,
            handleShowGenreSubmit,
            showCategoryChoice,
            setShowCategoryChoice
        }}
        >
            {children}
        </ShowContext.Provider>
    );
};

export default ShowContext;