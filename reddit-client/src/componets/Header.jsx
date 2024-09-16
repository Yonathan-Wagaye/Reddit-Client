import React from "react";
import styles from './style/Header.module.css';
import SearchBar from "./SearchBar";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <img src={`${process.env.PUBLIC_URL}/img/reddit-seeklogo.svg`} alt="reddit-logo" />
                    <div className={styles.title}>
                        <p>Reddit Lite</p>
                    </div>
                </div>
                
                <div className={styles.searchBar}>
                    <SearchBar />
                </div>

                
                
            </div>
        </header>
    )
};

export default Header;