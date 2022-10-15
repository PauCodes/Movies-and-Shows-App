import Card from "../UI/Card";
// import styles from "../UI/DisplayMoviesAndShows.module.css";
import styles from "../UI/DisplayMoviesAndShows.module.css";

const DisplayByGenreMovies = ({data}) => {    
    const imgUrl = 'https://image.tmdb.org/t/p/original';

    return (
        <Card className={styles.container}>
            <li className={styles.item} >       
                <img className={styles.itemImg} src={`${imgUrl}${data.poster_path}`} alt={`Poster of the movie ${data.title}`}/>         
                <div className={styles.middleText}>
                    <div>
                        <h3>{data.title}</h3>
                        <p className={styles.itemVote}>{data.vote_average}</p>
                        <p>{data.overview}</p>
                    </div>
                </div>
            </li>
        </Card>

    );
};

export default DisplayByGenreMovies;