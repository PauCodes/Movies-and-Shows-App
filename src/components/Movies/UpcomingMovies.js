import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import styles from './UpcomingMovies.module.css';


const UpcomingMovies = () => {
    const { showUpcomingMovies } = useContext(MovieContext);
    
    const displayUpcomingMovies = showUpcomingMovies.map((movie, index) => {
        const imgUrl = 'https://image.tmdb.org/t/p/original';
        return  <li className={styles.upcomingItem} key={index}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <img className={styles.upcomingImg} src={`${imgUrl}${movie.poster_path}`} alt={`Poster of the movie ${movie.title}`}/>
                </li>
    })

    return (
        <section className={styles.upcomingMoviesSection}>
            <div className={styles.wrapper}>
                <h2>Upcoming Movies</h2>
                <ul className={styles.upcomingList}>{displayUpcomingMovies}</ul>
            </div>
        </section>
      
    );
};

export default UpcomingMovies;