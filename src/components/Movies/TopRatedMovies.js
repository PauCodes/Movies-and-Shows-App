import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import styles from './TopRatedMovies.module.css';
import Card from "../UI/Card";

const TopRatedMovies = () => {

    const { showTopRatedMovies } = useContext(MovieContext);        
    
    const displayTopRatedMovies = showTopRatedMovies.map((movie, index) => {
        const imgUrl = 'https://image.tmdb.org/t/p/original';

        return  <Card key={index} className={styles.topRatedMovieContainer}>
                    <li className={styles.topRatedItem} >       
                        <img className={styles.topRatedImg} src={`${imgUrl}${movie.poster_path}`} alt={`Poster of the movie ${movie.title}`}/>         
                        <div className={styles.middleText}>
                            <div>
                                <h3>{movie.title}</h3>
                                <p className={styles.topRatedVote}>{movie.vote_average}</p>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </li>
                </Card>
    })

    return (
        <section className={styles.topRatedMoviesSection}>
            <div className={styles.wrapper}>
                <h2>Top Rated Movies</h2>
                <ul className={styles.topRatedList}>{displayTopRatedMovies}</ul>
            </div>
           
        </section>
    );
};

export default TopRatedMovies;