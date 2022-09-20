import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import styles from './ByGenreMovies.module.css';

const ByGenreMovies = () => {
    const { showMoviesByGenre } = useContext(MovieContext);
    console.log(showMoviesByGenre);

    const moviesGenre = showMoviesByGenre.map((genre) => {
        return <option key={genre.id} value={genre.id}>{genre.name}</option>
    })

    return (
        <section className={styles.moviesByGenreSection}>
            <div className={styles.wrapper}>
            <h2>Movies by Genre</h2>
            <form>
                <label htmlFor="movie_genre">Select a Genre:</label>
                <select name="movie_genre" id='movie_genre'>
                    <option disabled>Select a Category</option>
                    {moviesGenre}
                </select>
            </form>
            </div>
        </section>
        
    );
};

export default ByGenreMovies;