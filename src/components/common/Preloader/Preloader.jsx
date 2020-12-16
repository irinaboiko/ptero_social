import React from 'react';
import styles from "./Preloader.module.css";
import preloader from "../../../assets/img/preloader-eclipse.svg";

const Preloader = (props) => {
    return (
        <div className={styles.preloaderWrapper}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;