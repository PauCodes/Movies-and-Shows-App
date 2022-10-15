import styles from './ByGenreMovies&Shows.module.css';
// import styles from "../UI/DisplayMoviesAndShows.module.css";
import ShowContext from '../../context/ShowContext';
import { useContext, useEffect } from 'react';
import DisplayByGenreShow from './DisplayByGenreShows';

const ByGenreShows = () => {

    const { genreCategories, handleCategoryChange, handleShowGenreSubmit, showCategoryChoice, setShowCategoryChoice } = useContext(ShowContext);    

    const showGenres = genreCategories.map(genre => {
        return <option key={genre.id} value={genre.id}>{genre.name}</option>
    });
    
    const displayShowsByGenre = showCategoryChoice.map(el => {
        return <DisplayByGenreShow key={el.id} data={el}/>
    });

    useEffect(() => {
        setShowCategoryChoice([])
    },[setShowCategoryChoice]);

    return (
        <section className={styles.section}>
        <div className={styles.wrapper}>
            <h2>Shows by Genre</h2>
            <form className={styles.genreForm} onSubmit={handleShowGenreSubmit}>
                <div className={styles.arrowContainer}>
                    <i className={`fa-solid fa-caret-down`}></i>
                    <label htmlFor="show_genre" className='sr-only'>Select a Genre:</label>
                    <select className={styles.genreSelect} name="show_genre" id='show_genre' onChange={handleCategoryChange}>
                        <option>Select a Category</option>
                        {showGenres}
                    </select>
                </div>
            </form>
            <ul className={styles.list}>{displayShowsByGenre}</ul>
        </div>
    </section>
    );
};

export default ByGenreShows;