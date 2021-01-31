import React, {useState} from 'react';
import styles from '../../cssModules/Order.module.css';
import {Header} from "../Header";

import img01 from '../../images/01.svg'
import img02 from '../../images/02.svg'
import finlly from '../../images/finally.svg'


export const OrderPage = () => {


    const [form, setForm] = useState({
        lending: false,
        market: false,
        corp: false,
        other: false,
        speed: false,
        budget: false,
        quality: false,
        all: false,
    })

    const onchangeHandler = (evt) => {
        const target = evt.target;
        const value = target.checked;

        if ((target.name === 'other' && (form.lending || form.market || form.corp)) || (form.other && (target.name === 'lending' || target.name === 'market' || target.name === 'corp'))) {
            alert('вы можете выбрать что-то одно, либо пункт из списка, либо "другое" ')
        }
        else if ((target.name === 'quality' && (form.speed || form.budget) ) || ((target.name === 'budget' || target.name === 'speed') && form.quality) || (target.name === 'all')){
            alert('Так не получится:) либо либо скорость и бюджет либо качество')
        }
        else { 
            setForm({...form, [target.name]: value})
        }
    };




    return(
        <div className={styles.wrapper}>
            <Header orderMob={true}/>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Этот день настал. Будем делать вещи, <span className={styles.purple}>вместе</span></h1>
            </div>
                <div className={styles.descContainer}>
                    <div className={styles.descItem}>
                        <h2 className={styles.descItem_title}>Нормально, если пока вы сами не знаете чего хотите</h2>
                        <p className={styles.descItem_p}>
                        Вместе мы спокойно во всем разберемся. Заполните короткий опросник,<br/>
                        а потом мы вам позвоним и все обсудим.
                        </p>
                    </div>
                    <div className={styles.descItem}>
                        <h2 className={styles.descItem_title}>Что будет после заполения формы?</h2>
                        <p className={styles.descItem_p}>
                            После того как вы заполните форму, мы вам перезвоним для уточнения всеx<br/>
                            нюансов, целей и задач вашего проекта.
                        </p>
                    </div>
                </div>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <img className={styles.imgMob} src={img01} alt={1}/>
                        <div className={styles.formCard}>
                            <h2 className={styles.cardTitle}>
                                Мне нужен:
                            </h2>
                            <div className={styles.checkContainer} >
                                <h3 className={styles.select}>Лендинг</h3>
                                <label>
                                    <div className={form.lending ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div className={form.lending ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.lending} name="lending" type="checkbox"/>
                                </label>
                            </div>
                            <div className={styles.checkContainer}>
                                <h3 className={styles.select}>Интернет-магазин</h3>
                                <label>
                                    <div className={form.market ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div className={form.market ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.market} name="market" type="checkbox"/>
                                </label>
                            </div>
                            <div className={styles.checkContainer}>
                                <h3 className={styles.select}>Корпоративный сайт</h3>
                                <label>
                                    <div className={form.corp ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div className={form.corp ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.corp} name="corp" type="checkbox"/>
                                </label>
                            </div>
                            <div className={styles.checkContainer}>
                                <h3 className={styles.select}>Хочу другое</h3>
                                <label>
                                    <div className={form.other ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div className={form.other ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.other} name="other" type="checkbox"/>
                                </label>
                            </div>
                        </div>
                        <img className={styles.imgMob} src={img02} alt={2}/>
                        <div className={styles.formCard}>
                            <h2 className={styles.cardTitle}>
                                Важнее всего для меня:
                            </h2>
                            <div className={styles.checkContainer}>
                                <h3 className={styles.select}>Скорость реализации</h3>
                                <label>
                                    <div className={form.speed ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div  className={form.speed ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.speed} name="speed" type="checkbox"/>
                                </label>
                            </div>
                            <div className={styles.checkContainer}>
                                <h3 className={styles.select}>Уместиться в бюджет</h3>
                                <label>
                                    <div className={form.budget ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div className={form.budget ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.budget} name="budget" type="checkbox"/>
                                </label>
                            </div>
                            <div className={styles.checkContainer}>
                                <h3 className={styles.select}>Качественное качество</h3>
                                <label>
                                    <div className={form.quality ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div className={form.quality ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.quality} name="quality" type="checkbox"/>
                                </label>
                            </div>
                            <div className={styles.checkContainer}>
                                <h3 className={styles.select}>Вот все сразу нужно,<br/> памагити!</h3>
                                <label>
                                    <div className={form.all ? `${styles.switch} ${styles.switchActive}` : `${styles.switch}`}>
                                        <div className={form.all ? `${styles.switchSlider} ${styles.switchSliderActive}` : `${styles.switchSlider}`}>

                                        </div>
                                    </div>
                                    <input className={styles.paramsCheck} onChange={onchangeHandler} checked={form.all} name="all" type="checkbox"/>
                                </label>
                            </div>
                        </div>
                        <img className={styles.imgMob} src={finlly} alt={3}/>
                        <div className={styles.formCard}>
                            <div className={styles.border}>
                                <h2 className={styles.cardTitle}>
                                    Мои контактные данные:
                                </h2>
                                    <input id="name" type="text" name="name" className={styles.cardInput} placeholder="Имя" /><br/>
                                    <input type="text" name="phone" className={styles.cardInput} placeholder="Мобильный" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"/><br/>
                                    <input type="text" name="corp" className={styles.cardInput} placeholder="Компания"/><br/>
                                    <div className={styles.persData}><input className={styles.persDataCheck} name="persData" type="checkbox" required/><p className={styles.persDataDesc}>Я не против обработки моих персональных<br/> данных. данных. <span className={styles.purple}>Политика конфеденциальности</span></p></div>
                                    <button className={styles.button}>Отправить бриф</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};