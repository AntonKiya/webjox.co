import React from 'react';

import styles from '../cssModules/Article.module.css';
import {Link} from "react-router-dom";


export const Article = (props) => {

    return(
        <div className={styles.article}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.vis}>
                <img src={props.img} alt={"img"}/>
                <img src={props.back} alt={"img"}/>
            </div>
            <div className={styles.add}>
                <span className={styles.date}>{props.date}</span>
                <div className={styles.brif}><Link to={props.link} className={styles.card_link}>Читать статью</Link></div>
            </div>
            <Link to={props.link}><button  className={styles.articleMobButton}>Читать новость</button></Link>
        </div>
    );
};