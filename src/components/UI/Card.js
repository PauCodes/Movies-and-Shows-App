import styles from '../styles/Card.module.css';

const Card = (props) => {
    return (
        <div onClick={props.onClick} className={`${styles.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;