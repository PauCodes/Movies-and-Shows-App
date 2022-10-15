import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DisplayByGenreMovie from './DisplayByGenreMovies';
import BackBtn from "../UI/BackBtn";
import MovieContext from "../../context/MovieContext";
import styles from '../Shows/ByGenreMovies&Shows.module.css';

const ByGenreMovies = () => {
    const { genreCategories, handleCategoryChange, handleMovieGenreSubmit, movieCategoryChoice, setMovieCategoryChoice } = useContext(MovieContext);

    const moviesGenre = genreCategories.map((genre) => {
        return <option key={genre.id} value={genre.id}>{genre.name}</option>
    });

    const showMoviesByGenre = movieCategoryChoice.map((el) => {
        return <DisplayByGenreMovie key={el.id} data={el} />
    });

    useEffect(() => {
        setMovieCategoryChoice([]);
    }, [setMovieCategoryChoice]);

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2>Movies by Genre</h2>
                <form className={styles.genreForm} onSubmit={handleMovieGenreSubmit}>
                    <div className={styles.arrowContainer}>
                        <i className={`fa-solid fa-caret-down`}></i>
                        <label htmlFor="movie_genre" className='sr-only'>Select a Genre:</label>
                        <select className={styles.genreSelect} name="movie_genre" id='movie_genre' onChange={handleCategoryChange}>
                            <option value="0" >Select a Category</option>
                            {moviesGenre}
                        </select>
                    </div>
                </form>     
                <ul className={styles.list}>{showMoviesByGenre}</ul> 
                <Link to='/'><BackBtn/></Link>                  
            </div>
        </section>      
    );
};

export default ByGenreMovies;