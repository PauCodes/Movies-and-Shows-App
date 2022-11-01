import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import BackBtn from '../UI/BackBtn';
import styles from '../styles/ShowsSection.module.css';

const ShowsSection = () => {

    return (
        <section className={styles.showsSection}>
            <div className={styles.wrapper}>
                <div className={styles.options}>
                    <Link to='/shows/top_rated'><Button>Top Rated</Button></Link>
                    <Link to='/shows/by_genre'><Button>By Genre</Button></Link>
                </div>
                <Link to='/'><BackBtn/></Link>
            </div>
        </section>
    );
};

export default ShowsSection; 