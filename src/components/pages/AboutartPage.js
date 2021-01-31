import React from 'react';

import styles from '../../cssModules/AboutartPage.module.css'
import {Header} from "../Header";

import img1 from '../../images/AboutartImg1.svg'
import back1 from '../../images/AboutartBack1.svg'
import {Link} from "react-router-dom";


export const AboutartlePage = () => {


    return(
        <div className={styles.aboutart}>
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.titlePage}>
                    <h1 className={styles.title}>
                        Заголовок статьи
                    </h1>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoText}>
                        <div className={styles.spoilerContainer}>
                            <h2 className={styles.subtitle}>
                                Споилер (не надо)
                            </h2>
                            <p className={styles.desc}>
                                Следует отметить, что постоянный количественный рост и сфера нашей активности однозначно фиксирует необходимость поставленных обществом задач. Равным образом, внедрение современных методик влечет за собой процесс внедрения и модернизации кластеризации усилий. Лишь элементы политического процесса ассоциативно распределены по отраслям. Убеждённость некоторых оппонентов однозначно фиксирует необходимость поставленных обществом задач. Лишь элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объединены в целые кластеры себе подобных! Но дальнейшее развитие различных форм деятельности требует определения и уточнения как самодостаточных, так и внешне зависимых концептуальных решений.
                            </p>
                        </div>
                        <div className={styles.subtitleContainer}>
                            <h2 className={styles.subtitle}>
                                Подзаголовок
                            </h2>
                            <p className={styles.desc}>
                                Следует отметить, что постоянный количественный рост и сфера нашей активности однозначно фиксирует необходимость поставленных обществом задач. Равным образом, внедрение современных методик влечет за собой процесс внедрения и модернизации кластеризации усилий. Лишь элементы политического процесса ассоциативно распределены по отраслям. Убеждённость некоторых оппонентов однозначно фиксирует необходимость поставленных обществом задач. Лишь элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объединены в целые кластеры себе подобных! Но дальнейшее развитие различных форм деятельности требует определения и уточнения как самодостаточных, так и внешне зависимых концептуальных решений.
                            </p>
                        </div>
                        <div className={styles.add}>
                            <span className={styles.name}>
                                Иванов А.А.
                            </span>
                            <span className={styles.date}>
                                01.01.2021
                            </span>
                        </div>
                        <div className={styles.nextArrticleMob}>
                            <p className={styles.readNext}>
                                Чтать далее:
                            </p>
                            <p className={styles.nextArtName}>
                                Рыжесть среди веб-разработчиков
                            </p>
                            <Link to="/"><button  className={styles.articleMobButton}>Читать новость</button></Link>
                        </div>
                    </div>
                    <div className={styles.infoVis}>
                        <div className={styles.card}>
                            <img className={styles.img} src={img1} alt={'img'}/>
                            <img className={styles.back} src={back1} alt={''}/>
                        </div>
                        <div className={styles.nextArrticle}>
                            <p className={styles.readNext}>
                                Чтать далее:
                            </p>
                            <p className={styles.nextArtName}>
                                Рыжесть среди веб-разработчиков
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};