import React from 'react';
import styles from "../cssModules/Example.module.css";
import {Link} from "react-router-dom";




export const Example = (params) => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.exItem}>
                <div className={styles.exContent}>
                    <span className={`${styles.exTitle} ${styles.exTitleMob}`}>
                        {params.title}
                    </span><br/>
                        <img src={params.img} className={styles.exImg} alt={'img'}/>
                    <div className={styles.exText}>
                        <h2 className={styles.exTitle}>
                            {params.title}
                        </h2>
                        <p className={styles.exDescTitle}>
                            {params.descTitle}
                        </p>
                        <p className={styles.exDesc}>
                            {params.desc}
                        </p>
                    </div>
                </div>
                <Link to={params.href}><button className={styles.brifButton}>{params.linkName}</button></Link>
                <div className={styles.brif}><Link to={params.href} className={styles.card_link}>{params.linkName}</Link></div>
            </div>
        </div>
    );
};