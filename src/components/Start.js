import React from 'react';
import styles from '../cssModules/Start.module.css';


export const Start = (params) => {

    return(

        <div className={styles.wrapper}>
            <h1 className={styles.title}>{params.title || 'Внимание-внимание!'}</h1>
        </div>
    );
};