import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import BackBtn from '../UI/BackBtn';
import styles from './ShowsSection.module.css';

const ShowsSection = () => {

    return (
        <section className={styles.showsSection}>
            <div className={styles.wrapper}>
                <div className={styles.options}>
                    <Link to='/shows/top_rated'><Button>Top Rated</Button></Link>
                    <Link to='/by_genre'><Button>By Genre</Button></Link>
                    <Link to='/'><BackBtn/></Link>
                </div>
            </div>
        </section>
    );
};

export default ShowsSection; 