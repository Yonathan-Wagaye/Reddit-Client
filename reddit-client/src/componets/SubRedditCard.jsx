import React from "react";
import styles from './style/SubRedditCard.module.css';

const SubRedditCard = ({name, isActive, changeSubReddit}) => {
    const activeClass = isActive ? styles.active : styles.cardContainer;
    return (
        <div className={activeClass} onClick={() => {changeSubReddit(name)}}>
            {name}
        </div>
    );
}

export default SubRedditCard;