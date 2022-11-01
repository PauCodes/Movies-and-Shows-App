import Button from "../UI/Button";
import styles from '../styles/Home.module.css';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.options}>
                    <Link to='/movies'><Button >Movies</Button></Link>
                    <Link to='/shows'><Button >Shows</Button></Link>
                </div>
            </div>
        </header>
    );
};

export default Home;