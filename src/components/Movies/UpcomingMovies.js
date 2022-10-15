import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import Card from "../UI/Card";
// import styles from './UpcomingMovies.module.css';
import styles from "../UI/DisplayMoviesAndShows.module.css";


const UpcomingMovies = () => {
    const { showUpcomingMovies } = useContext(MovieContext);
    
    const displayUpcomingMovies = showUpcomingMovies.map((movie, index) => {
        const imgUrl = 'https://image.tmdb.org/t/p/original';
        return <Card key={index} className={styles.container}> 
                    <li className={styles.lisItem}>
                        <img className={styles.itemImg} src={`${imgUrl}${movie.poster_path}`} alt={`Poster of the movie ${movie.title}`}/>
                        <div className={styles.middleText}>
                            <div>
                                <h3>{movie.title}</h3>
                                <p className={styles.itemVote}>{movie.vote_average}</p>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        
                    </li>
                </Card>
    });

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2>Upcoming Movies</h2>
                <ul className={styles.list}>{displayUpcomingMovies}</ul>
            </div>
        </section>  
    );
};

export default UpcomingMovies;