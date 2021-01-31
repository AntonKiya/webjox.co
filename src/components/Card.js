import React from 'react';
import styles from '../cssModules/Card.module.css'
import stylesTitle from '../cssModules/CardTitle.module.css';


import vacimg1 from '../images/vacimg1.svg';
import vacback1 from '../images/vacback1.svg';
import {Link} from "react-router-dom";


export const Card = (params) => {

    return(
        <div className={styles.card}>
            <h2 style={{color: `${params.colorCode}`}} className={stylesTitle.card_title}>{params.title}</h2>
            <Link to={params.href}>
                <div className={styles.visual}>
                    <img className={styles.card_back} src={params.bckg || vacback1} alt={"pic"}/>
                    <img className={styles.card_pic} src={params.pic || vacimg1} alt={"pic"}/>
                    <p className={styles.card_desc}>{params.desc}</p>
                </div>
            </Link>
            <Link to={params.href}><button className={styles.brifButton}>{params.link}</button></Link>
            <div className={styles.brif}><Link to={params.href} className={styles.card_link}>{params.link}</Link></div>
        </div>
    );
};

