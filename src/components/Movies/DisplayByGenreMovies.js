import Card from "../UI/Card";
import styles from "../styles/DisplayMoviesAndShows.module.css";
import { useContext } from "react";
import MovieContext from "../../context/MovieContext";


const DisplayByGenreMovies = ({data}) => {    

    const { showInfoHandler } = useContext(MovieContext);  

    const imgUrl = 'https://image.tmdb.org/t/p/original';

    return (
        <>
        <Card className={styles.container} onClick={() => showInfoHandler(data)
        }>
            <li className={styles.item}>       
                <img className={styles.itemImg} src={`${imgUrl}${data.poster_path}`} alt={`Poster of the movie ${data.title}`}/>        
            </li>
        </Card>
        </>
    );
};

export default DisplayByGenreMovies;