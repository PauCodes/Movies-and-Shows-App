import Card from "./Card";
import Button from "./Button";
import styles from "../styles/MoreInfoModal.module.css";
import { useContext } from "react";
import MovieContext from "../../context/MovieContext";

const MoreInfoModal = ({name, vote, overview}) => {

    const { closeMoreInfoHandler } = useContext(MovieContext);  

    return (
        <div className={styles.backdrop} onClick={closeMoreInfoHandler}>
                <Card className={styles.modal}>
                    <header className={styles.header}>
                        <h3>{name}</h3>
                        <p className={styles.itemVote}>{vote}</p>
                    </header>
                    <div className={styles.content}>
                        <p>{overview}</p>
                    </div>                 
                    <footer className={styles.actions}>
                        <Button onClick={closeMoreInfoHandler}>Ok</Button>
                    </footer> 
                </Card>
        </div>
    );
};

export default MoreInfoModal;