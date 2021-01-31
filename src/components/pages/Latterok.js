import React from 'react';
import styles from '../../cssModules/Letterok.module.css';
import {Header} from "../Header";

import pter from '../../images/pterad.svg'
import {Link} from "react-router-dom";


export const Letterok = () => {


    return(
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.border}>
                <div className={styles.content}>

                    <div className={styles.text}>
                        <div className={styles.title}>
                            <span className={styles.purp}>Все круто!</span><br/>
                            Ваше письмо уже<br/> летит!
                        </div>
                        <p className={styles.desc}>
                            В ближайшее время вам перезвонит<br/>  наш менеджер.
                        </p>
                        <div className={styles.brif}><Link to='/' className={styles.card_link}>Перейти на сайт</Link></div>
                    </div>
                    <div className={styles.pter}>
                        <img src={pter} alt={'img'}/>
                    </div>
                    <Link to={'/'}><button className={styles.brifButton}>Смотреть портфолио</button></Link>
                </div>
            </div>
        </div>
    );
};