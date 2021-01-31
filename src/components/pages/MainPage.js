import React from 'react';
import styles from '../../cssModules/Main.module.css'
import {Header} from "../Header";
import {Start} from "../Start";
import {Example} from "../Example";


import mainImg1 from "../../images/mainImg1.svg"
import mainImg2 from "../../images/mainImg2.svg"
import mainImg3 from "../../images/mainImg3.svg"
import mainImg4 from "../../images/mainImg4.svg"
import button from "../../images/button.svg";
import {Link} from "react-router-dom";



export const MainPage = () => {

    const scroller = (event) => {
            const scroll = document.getElementById('scroll')
            // замена вертикальной прокрутки горизонтальной
            scroll.scrollLeft += 1 * event.deltaY;
    }

    return(
        <div onWheel={scroller}>
            <div className={styles.wrapper}>
                <Header/>
                <Start title="Создадим ваш бизнес в интернетах"/>
            </div>
            <div id="scroll" className={styles.cardContainer}>
                <div className={styles.card}><Example href='/portfolio' linkName={'Смотреть порфтолио'} img={mainImg1} title={'Портфолио'} descTitle="Представляем прекрасных представителей семейства веб-сайтов." desc="Отлично дополняют ваши текущие инструменты продаж."/></div>
                <div className={styles.card}><Example href='/services' linkName={'Подробнее про услуги'} img={mainImg2} title={'Услуги'} descTitle="Создаем лендинги, интернет-магазины и сервисы под ключ. Как себе." desc="Любой каприз за разумный прайс."/></div>
                <div className={styles.card}><Example href='/blog' linkName={'Читать блог'} img={mainImg4} title={'Блог JOX'} descTitle="Здесь про то, кто мы, что делаем и как мы работаем." desc="Можно почитатьесли хотите познакомиться с нами по-ближе."/></div>
                <div className={styles.card}><Example href='/vacancy' linkName={'Смотреть вакансии'} img={mainImg3} title={'Вакансии от JOX'} descTitle="Здесь список необходимых нам специалистов." desc="Приходи к нам работать. Переходи на сторону JOX."/></div>
            </div>
            <div className={styles.clearfix}/>
            <div className={styles.wrapper}>
                <div className={styles.infoBorder}>
                    <div className={styles.infoContainer}>
                        <h2 className={styles.infoTitle}>
                            Диджитал агентство WEB JOX
                        </h2>
                        <div className={styles.contactsContainer}>
                            <span className={`${styles.adress} ${styles.contacts}`}>Ростов-на-Дону <div className={styles.line}></div>  Варфоломеева, 265 <span className={styles.line}/>  3 этаж, офис 8</span>
                            <span className={`${styles.phoneemail} ${styles.contacts}`}>8 (863) 200-00-00 <span className={styles.line}/>  <Link to="/main"><span className={styles.purp}>hello@webjox.ru</span></Link></span>
                            <span className={`${styles.adressMob} ${styles.contactsMob}`}>Ростов-на-Дону Варфоломеева, 265 3  этаж, офис 8</span>
                            <span className={`${styles.phoneemailMob} ${styles.contactsMob}`}><span className={styles.numberMob}>8 (863) 200-00-00 </span><Link to="/main"><span className={styles.purp}>hello@webjox.ru</span></Link></span>
                        </div>
                        <Link to={'/order'} className={styles.buttonMob}><img src={button} alt="нажми!"/><span className={styles.buttonText}>Заполнить бриф</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};