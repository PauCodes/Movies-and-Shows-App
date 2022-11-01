import ShowContext from '../../context/ShowContext';
import { useContext } from 'react';
import styles from "../styles/DisplayMoviesAndShows.module.css";
import Card from '../UI/Card';
import MoreInfoModal from "../UI/MoreInfoModal";
import BackBtn from '../UI/BackBtn';
import { Link } from 'react-router-dom';

const TopRatedShows = () => {
    const { topRatedShows, showInfoHandler, showModal, itemSelected } = useContext(ShowContext); 
    
    const displayTopRatedShows = topRatedShows.map((show, index) => {
        const imgUrl = 'https://image.tmdb.org/t/p/original';

        return <Card key={index} className={styles.container} onClick={() => showInfoHandler(show)}>
                    <li className={styles.item} >       
                        <img className={styles.itemImg} src={`${imgUrl}${show.poster_path}`} alt={`Poster of the show ${show.name}`}/>                    
                    </li>
                </Card>
    })

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
            <Link to='/'><BackBtn className={styles.homeBtn}/></Link> 

                <h2><span>T</span>op <span>R</span>ated <span>S</span>hows</h2>
                <ul className={styles.list}>{displayTopRatedShows}</ul>
            </div>
            { showModal && <MoreInfoModal name={itemSelected.name} vote={itemSelected.vote_average} overview={itemSelected.overview}/>}
        </section>
    );
};

export default TopRatedShows;