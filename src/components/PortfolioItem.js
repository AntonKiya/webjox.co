import React,{useState}  from 'react';
import {PortDesc} from '../components/PortDesc';

import styles from '../cssModules/PortfolioItem.module.css'
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import {Link} from "react-router-dom";

export const PortfolioItem = (props) => {

    const [active, setActive]  = useState(false);
    const [pointer, setPointer]  = useState(false);

    const changeHandler = () => {
      setActive(!active);
    };

    const pointerHandler = () => {
        setPointer(!pointer);
    };

    return(
        <div className={styles.portItem} onPointerOver={pointerHandler} onPointerOut={pointerHandler}>
            <div className={styles.portTitleContainer} onClick={changeHandler}>
                <h1 className={styles.portTitle}>
                    {props.title}
                </h1>
                <div className={pointer ? styles.PortDescItemContainer2 : styles.PortDescItemContainer}>
                    <PortDesc content={props.content}/>
                </div>
                <img className={styles.portImg} src={active ? minus : plus}  alt="close"/>
            </div>
            <div className={active ? styles.show : styles.portDescContainer}>
                <p className={styles.portDesc}>{props.desc}</p>
                <button className={styles.brifButton}>Смотреть портфолио</button>
                <div className={styles.brif}><Link to={props.href} className={styles.card_link}>Перейти на сайт</Link></div>
            </div>
        </div>
    );
}