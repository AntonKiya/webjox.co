import React, {useState} from 'react';
import logo from '../images/logo.svg'
import styles from '../cssModules/Header.module.css'

import cristall from '../images/cristall.svg'
import {Link} from "react-router-dom";

export const Header = (props) => {

    const [menuActive, setMenuActive] = useState(false);

    const changeHandler = () => {
        setMenuActive(!menuActive);
    }

    return (
        <header className={props.orderMob ? `${styles.headerOrderMob}` : false}>
            <div className={styles.wrapper}>
                <div className={styles.header_wrapper}>
                    <div className={styles.header_logo}>
                        <Link to='/'><img src={logo} alt="logo"/></Link>
                    </div>
                    <nav id="nav"
                         className={menuActive ? `${styles.header_nav} ${styles.active}` : `${styles.header_nav}`}>
                        <ul className={styles.header_list}>
                            <li onClick={changeHandler}
                                className={`${styles.header_item}  ${styles.header_itemMob}`}>    &#60; Назад
                            </li>
                            <li className={styles.header_item}><Link className={styles.header_link}
                                                                     to='/portfolio'>Портфолио</Link></li>
                            <li className={styles.header_item}><Link className={styles.header_link}
                                                                     to='/services'>Услуги</Link></li>
                            <li className={styles.header_item}><Link className={styles.header_link}
                                                                     to='/blog'>Блог</Link></li>
                            <li className={styles.header_item}><Link className={styles.header_link}
                                                                     to='/vacancy'>Вакансии</Link></li>
                            <li className={`${styles.header_item}  ${styles.header_itemMob}`}><img src={cristall}
                                                                                                   alt={'img'}/></li>
                        </ul>
                    </nav>
                    <div
                        className={`${styles.burger} `}
                        onClick={changeHandler}
                    >
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </div>
                </div>
            </div>
        </header>
    );



};

