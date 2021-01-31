import React from 'react';
import styles from '../../cssModules/Aboutvac.module.css'
import {Header} from "../Header";

export const AboutvacPage = () => {

    return(
        <div className={styles.wrapper}>
            <Header/>
            <h1 className={styles.title}>Задачки для <span className={styles.purple}>Junior Full Stack разработчика</span></h1>
            <h1 className={styles.titleMob}>Задачки</h1>
                <div className={styles.container}>

                    <div className={styles.tasks}>
                        <div className={styles.task}>
                            <h2 className={styles.subtitle}>
                                Твоя основная задача в команде Webjox:
                            </h2>
                            <span className={styles.span}>— Участие в разработке web-сайтов</span>
                        </div>
                    <div className={styles.expectations}>
                        <h2 className={styles.subtitle}>
                            Наши ожидания:
                        </h2>
                        <span className={styles.span}>— Знание HTML, CSS, Jquery, Ajax, Bootstrap</span>
                        <span className={styles.span}>— Знание PHP, MySQL, JavaScript</span>
                        <span className={styles.span}>— Знание систем контроля версий (GIT)</span>
                    </div>
                    <div className={styles.add_expect}>
                        <h2 className={styles.subtitle}>
                            <span className={styles.purple}>Отдельный респект за:</span>
                        </h2>
                        <span className={styles.span}>— Lavarel</span>
                        <span className={styles.span}>— Yi2</span>
                    </div>
                    </div>

                    <div className={styles.offer}>
                        <div className={styles.whatoffer}>
                            <h2 className={styles.subtitle}>
                                Что предлагаем:
                            </h2>
                            <span className={styles.span}>— Работа в уютном офисе в центре города</span>
                            <span className={styles.span}>— Интересные проекты и сложные задачи</span>
                            <span className={styles.span}>— Молодая команда профессионалов</span>
                            <span className={styles.span}>— В будущем возможна удаленка</span>
                            <span className={styles.span}>— Стабильная заработная плата (оклад + бонусы)</span>
                        </div>
                        <div className={styles.offerEmail}>
                            <div className={styles.offerContent}>
                                <h1 className={styles.emailTitle}>
                                    Если все ок — пиши на почту!
                                </h1>
                                <span className={styles.span}>В теме письма укажи Junior Full Stack разработчик<br/>
                                и шли письмо на почту <span className={styles.purple}>hello@webjox.ru</span></span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};