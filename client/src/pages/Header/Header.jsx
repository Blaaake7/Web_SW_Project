import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

    const navToPage = (event) => {
        const targetDiv = event.target.id;
        navigate(`/${targetDiv}`);
    }
  return (
    <div className={styles.wrapper}>
        <div className={styles.leftBox} onClick={() => {navigate('/')}}>
            Nail<br/>Delluna
        </div>
        <div className={styles.rightBox}>
            <div id='directions' className={styles.categoryHeader} onClick={navToPage}>
                오시는 길
            </div>
            <div id='service' className={styles.categoryHeader} onClick={navToPage}>
                서비스
            </div>
            <div id='product' className={styles.categoryHeader} onClick={navToPage}>
                상품
            </div>
            <div id='reservation' className={styles.categoryHeader} onClick={navToPage}>
                예약
            </div>
            <div id='portfolio' className={styles.categoryHeader} onClick={navToPage}>
                구경하기
            </div>
        </div>
    </div>
  )
}
