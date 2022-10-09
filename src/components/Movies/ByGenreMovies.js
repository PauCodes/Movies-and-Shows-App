import { useContext } from "react";
import DisplayByGenreMovie from './DisplayByGenreMovies';
import MovieContext from "../../context/MovieContext";
import styles from './ByGenreMovies.module.css';

const ByGenreMovies = () => {
    const { genreCategories, handleCategoryChange, handleMovieGenreSubmit, movieCategoryChoice } = useContext(MovieContext);

    console.log(movieCategoryChoice);

    const moviesGenre = genreCategories.map((genre) => {
        return <option key={genre.id} value={genre.id}>{genre.name}</option>
    })

    const showMoviesByGenre = movieCategoryChoice.map((el) => {
        return <DisplayByGenreMovie key={el.id} data={el} />
    })

    return (
        <section className={styles.moviesByGenreSection}>
            <div className={styles.wrapper}>
            <h2>Movies by Genre</h2>
            <form onSubmit={handleMovieGenreSubmit}>
                <label htmlFor="movie_genre">Select a Genre:</label>
                <select name="movie_genre" id='movie_genre' onChange={handleCategoryChange}>
                    <option>Select a Category</option>
                    {moviesGenre}
                </select>
            </form>
            <div className="resultsByGenre">
                {showMoviesByGenre}
            </div>
            </div>
        </section>
        
    );
};

export default ByGenreMovies;