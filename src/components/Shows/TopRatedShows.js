import styles from './TopRatedShows.module.css';
import ShowContext from '../../context/ShowContext';
import { useContext } from 'react';
import Card from '../UI/Card';

const TopRatedShows = () => {
    const { topRatedShows } = useContext(ShowContext);    
    
    const displayTopRatedShows = topRatedShows.map((show, index) => {
        const imgUrl = 'https://image.tmdb.org/t/p/original';

        return <Card key={index} className={styles.topRatedShowContainer}>
                    <li className={styles.topRatedItem} >       
                        <img className={styles.topRatedImg} src={`${imgUrl}${show.backdrop_path}`} alt={`Poster of the show ${show.name}`}/>         
                        <div className={styles.middleText}>
                            <div>
                                <h3>{show.name}</h3>
                                <p className={styles.topRatedVote}>{show.vote_average}</p>
                                <p>{show.overview}</p>
                            </div>
                        </div>
                    </li>
                </Card>
    })

    return (
        <section className={styles.topRatedShowSection}>
            <div className={styles.wrapper}>
                <h2>Top Rated Shows</h2>
                <ul className={styles.topRatedList}>{displayTopRatedShows}</ul>
            </div>
        </section>
    );
};

export default TopRatedShows;