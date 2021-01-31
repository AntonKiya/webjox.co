import React from 'react';
import styles from '../../cssModules/Vacancy.module.css';
import {Start} from "../Start";
import {Header} from "../Header";
import {Card} from "../Card";

import vacback1 from '../../images/vacback1.svg';

import vacimg1 from '../../images/vacimg1.svg';


export const VacancyPage = () => {

    return(
        <div className={styles.wrapper}>
            <Header/>
            <Start title={'Эти люди разыскиваются в Ростове-на-Дону'}/>
            <div className={styles.cards}>
                <Card colorCode= {'#691CFF'} title={'Junior Full Stack'} desc={'JOX вызывает веб-разработчика. Как слышно?'} link={'Описание вакансии'} pic={vacimg1} bckg={vacback1} href={'/aboutvac/:id'}/>
            </div>
        </div>
    );
};