import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import Card from "../UI/Card";
import styles from "../styles/DisplayMoviesAndShows.module.css";
import MoreInfoModal from "../UI/MoreInfoModal";
import BackBtn from "../UI/BackBtn";
import { Link } from "react-router-dom";


const UpcomingMovies = () => {
    const { showUpcomingMovies, showInfoHandler, showModal, itemSelected } = useContext(MovieContext);
    
    const displayUpcomingMovies = showUpcomingMovies.map((movie, index) => {
        const imgUrl = 'https://image.tmdb.org/t/p/original';
        return <Card key={index} className={styles.container} onClick={() => showInfoHandler(movie)}> 
                    <li className={styles.lisItem}>
                        <img className={styles.itemImg} src={`${imgUrl}${movie.poster_path}`} alt={`Poster of the movie ${movie.title}`}/>
                    </li>
                </Card>
    });

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
            <Link to='/'><BackBtn className={styles.homeBtn}/></Link> 
                <h2><span>U</span>pcoming <span>M</span>ovies</h2>
                <ul className={styles.list}>{displayUpcomingMovies}</ul>
            </div>
            { showModal && <MoreInfoModal name={itemSelected.title} vote={itemSelected.vote_average} overview={itemSelected.overview}/>}
        </section>  
    );
};

export default UpcomingMovies;