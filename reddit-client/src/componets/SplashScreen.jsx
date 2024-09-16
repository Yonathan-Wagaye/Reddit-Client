import React from "react";
import styles from './style/SplashScreen.module.css'
const SplashScreen = () => {
    
    return (
        <div className={styles.splashScreen}>
            <div className={styles.loading}>
                <h1>Loading...</h1>
            </div>
        </div>
    )
};

export default SplashScreen;