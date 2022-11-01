import styles from '../styles/BackBtn.module.css';

const BackBtn = (props) => {
    return (
        <button className={`${styles.backBtn} ${props.className}`}>Home</button>
    );
};

export default BackBtn;