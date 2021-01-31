import React from 'react';
import styles from '../cssModules/PortDesc.module.css';


export const PortDesc = ({content}) => {

    return(
        <div className={styles.portDescItem}>
            <p className={styles.portDescContent}>
                {content}
            </p>
        </div>
    );
};