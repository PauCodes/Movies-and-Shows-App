import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import BackBtn from '../UI/BackBtn';
import styles from './MoviesSection.module.css';
import MovieContext from '../../context/MovieContext';
import { useContext } from 'react';

const MoviesSection = () => {

    const {fetchTopRatedMovies, fetchUpcomingMovies, fetchMoviesByGenre, showMoviesByGenre} = useContext(MovieContext);
    

    return (
        <section className={styles.moviesSection}>
            <div className={styles.wrapper}>
                <div className={styles.options}>
                    <Link to='/movies/top_rated'><Button onClick={fetchTopRatedMovies}>Top Rated</Button></Link>
                    <Link to='/movies/upcoming'><Button onClick={fetchUpcomingMovies}>Upcoming</Button></Link>
                    <Link to='/movies/by_genre'><Button onClick={fetchMoviesByGenre} >By Genre</Button></Link>
                    <Link to='/'><BackBtn/></Link>
                </div>
            </div>
        </section>
    );
};

export default MoviesSection;