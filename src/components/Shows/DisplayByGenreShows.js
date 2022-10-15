import Card from "../UI/Card";
import styles from "../UI/DisplayMoviesAndShows.module.css";

const DisplayByGenreShow = ({data}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/original';
    return (
        <Card className={styles.container}>
        <li className={styles.lisItem} >       
            <img className={styles.itemImg} src={`${imgUrl}${data.poster_path}`} alt={`Poster of the movie ${data.name}`}/>         
            <div className={styles.middleText}>
                <div className={styles.innerContainer}>
                    <h3>{data.name}</h3>
                    <p className={styles.itemVote}>{data.vote_average}</p>
                    <p>{data.overview}</p>
                </div>
            </div>
        </li>
    </Card>
    );
};

export default DisplayByGenreShow;