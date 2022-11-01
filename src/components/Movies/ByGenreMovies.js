import { useContext, useEffect } from "react";
import DisplayByGenreMovie from './DisplayByGenreMovies';
import MovieContext from "../../context/MovieContext";
import styles from '../styles/ByGenreMovies&Shows.module.css';
import MoreInfoModal from "../UI/MoreInfoModal";
import { Link } from "react-router-dom";
import BackBtn from "../UI/BackBtn";


const ByGenreMovies = () => {
    const { genreCategories, handleCategoryChange, handleMovieGenreSubmit, movieCategoryChoice, setMovieCategoryChoice, showModal, itemSelected } = useContext(MovieContext);    
    

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
            <Link to='/'><BackBtn className={styles.homeBtn}/></Link> 

                <h2><span>M</span>ovies <span>B</span>y <span>G</span>enre</h2>
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
            </div>
            
            { showModal && <MoreInfoModal name={itemSelected.title} vote={itemSelected.vote_average} overview={itemSelected.overview}/>}

        </section>      
    );
};

export default ByGenreMovies;