import React from 'react';
import styles from "../../cssModules/Blog.module.css";
import {Header} from "../Header";
import {Start} from "../Start";
import {Article} from "../Article";

import articleImg1 from '../../images/articleImg1.svg';
import articleBack1 from '../../images/articleBack1.svg';
import articleImg2 from '../../images/articleImg2.svg';
import articleBack2 from '../../images/articleBack2.svg';
import articleImg3 from '../../images/articleImg3.svg';
import articleBack3 from '../../images/articleBack3.svg';

export const Blog = () => {

    return(
        <div>
            <div className={styles.wrapper}>
                <Header/>
                <Start title="Заголовок"/>
                <div className={styles.tags}>
                    <div className={styles.tagItem}>seo</div>
                    <div className={styles.tagItem}>figma</div>
                    <div className={styles.tagItem}>news</div>
                    <div className={styles.tagItem}>news</div>
                    <div className={styles.tagItem}>news</div>
                    <div className={styles.tagItem}>news</div>
                    <div className={styles.tagItem}>news</div>
                    <div className={styles.tagItem}>news</div>
                    <div className={styles.tagItem}>news</div>
                    <div className={styles.tagItem}>news</div>
                </div>
                <div className={styles.articleContainer}>
                    <Article title="Какая-нибудь новость про офис в котором теперь все работают" img={articleImg1} back={articleBack1} date="01.01.2021" link="/aboutart/:1"/>
                    <Article title="Рыжесть среди веб-разработчиков" img={articleImg2} back={articleBack2} date="01.01.2021" link="/aboutart/:id"/>
                    <Article title="Заголовок статьи" img={articleImg3} back={articleBack3} date="01.01.2021" link="/aboutart/:id"/>
                </div>
            </div>
        </div>
    );
};