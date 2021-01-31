import React from 'react';
import styles from '../../cssModules/Services.module.css';
import {Start} from "../Start";
import {Header} from "../Header";
import {Card} from "../Card";

import serback1 from '../../images/serback1.svg';
import serback2 from '../../images/serback2.svg';
import serback3 from '../../images/serback3.svg';

import serimg1 from '../../images/serimg1.svg';
import serimg2 from '../../images/serimg2.svg';
import serimg3 from '../../images/serimg3.svg';


export const ServicesPage = () => {

    return(
        <div className={styles.wrapper}>
            <Header/>
            <Start title={'Любой каприз за разумный прайс'}/>
            <div className={styles.cards}>
                <Card title={'Лендинг'} desc={'Протестировать нишу, запустить новый продукт'} link={'Заполнить бриф'} pic={serimg1} bckg={serback1} href={'/order'}/>
                <Card title={'Интернет магазин'} desc={'Каталоги, корзины, оплаты, отзывы и вот это вот всё'} link={'Заполнить бриф'} pic={serimg2} bckg={serback2} href={'/order'}/>
                <Card title={'Корпоративный сайт'} desc={'Многостраничный сайт рассказывающий как крута ваша компания'} link={'Заполнить бриф'} pic={serimg3} bckg={serback3} href={'/order'}/>
            </div>
        </div>
    );
};