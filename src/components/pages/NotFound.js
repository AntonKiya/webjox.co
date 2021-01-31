import React from 'react';
import styles from '../../cssModules/Error.module.css';

import err404 from '../../images/404.svg';
import button from '../../images/button.svg';
import {Link} from "react-router-dom";

export const NotFound = () => {

    return(
            <div>
                <div className={styles.container}>
                    <h2 className={styles.errTitle}>Этой страницы не существует:(</h2>
                      <div className={styles.contentContainer}>
                          <div className={styles.imgContainer}>
                              <img src={err404} alt="404"/>
                          </div>
                          <div className={styles.linkContainer}>
                              <div className={styles.brif}><Link to={'/'} className={styles.card_link}>Вернуться на главную</Link></div>
                              <Link to={'/'} className={styles.buttonMob}><img src={button} alt="нажми!"/><span className={styles.buttonText}>На главную</span></Link>
                          </div>
                      </div>
                </div>
            </div>
    );
};