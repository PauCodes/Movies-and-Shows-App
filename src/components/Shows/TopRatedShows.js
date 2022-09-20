import styles from './TopRatedShows.module.css';
import MovieContext from '../../context/MovieContext';
import { useContext } from 'react';

const TopRatedShows = () => {
    const { topRatedShows } = useContext(MovieContext);
    console.log(topRatedShows);
    

    return (
        <h2>Top Rated Shows</h2>
    );
};

export default TopRatedShows;