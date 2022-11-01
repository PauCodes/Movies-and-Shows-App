import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import BackBtn from '../UI/BackBtn';
import styles from '../styles/MoviesSection.module.css';

const MoviesSection = () => {

    return (
        <section className={styles.moviesSection}>
            <div className={styles.wrapper}>
                <div className={styles.options}>
                    <Link to='/movies/top_rated'><Button>Top Rated</Button></Link>
                    <Link to='/movies/upcoming'><Button >Upcoming</Button></Link>
                    <Link to='/movies/by_genre'><Button>By Genre</Button></Link>      
                </div>
                <Link to='/'><BackBtn/></Link> 
            </div>
        </section>
    );
};

export default MoviesSection;