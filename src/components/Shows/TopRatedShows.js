// import styles from './TopRatedShows.module.css';
import ShowContext from '../../context/ShowContext';
import { useContext } from 'react';
import Card from '../UI/Card';
import styles from "../UI/DisplayMoviesAndShows.module.css";


const TopRatedShows = () => {
    const { topRatedShows } = useContext(ShowContext);    
    
    const displayTopRatedShows = topRatedShows.map((show, index) => {
        const imgUrl = 'https://image.tmdb.org/t/p/original';

        return <Card key={index} className={styles.container}>
                    <li className={styles.listItem} >       
                        <img className={styles.itemImg} src={`${imgUrl}${show.backdrop_path}`} alt={`Poster of the show ${show.name}`}/>         
                        <div className={styles.middleText}>
                            <div>
                                <h3>{show.name}</h3>
                                <p className={styles.itemVote}>{show.vote_average}</p>
                                <p>{show.overview}</p>
                            </div>
                        </div>
                    </li>
                </Card>
    })

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2>Top Rated Shows</h2>
                <ul className={styles.list}>{displayTopRatedShows}</ul>
            </div>
        </section>
    );
};

export default TopRatedShows;