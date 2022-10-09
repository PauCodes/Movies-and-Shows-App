import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ShowContext  = createContext();

export const ShowProvider = ({children}) => {
    const url = process.env.REACT_APP_BASE_ENDPOINT;
    const key = process.env.REACT_APP_KEY;  

    const topRatedShowsUrl = '3/tv/top_rated';

    const [ topRatedShows, setTopRatedShows ] = useState([]);

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
                return index < 10;
            })
            setTopRatedShows(topRatedShowsArray);          
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ShowContext.Provider value={{
            topRatedShows

        }}
        >
            {children}
        </ShowContext.Provider>
    );
};

export default ShowContext;