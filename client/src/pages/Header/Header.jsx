import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../atom';
import axios from 'axios';

export default function Header() {

    const isLoggedIn = useRecoilValue(loginState);
    const setLoginState = useSetRecoilState(loginState);

    const navigate = useNavigate();

    const navToPage = (event) => {
        const targetDiv = event.target.id;
        navigate(`/${targetDiv}`);
    }

    const handleLogin = () => {
        if (isLoggedIn) {
            axios.post('http://43.202.228.228:8080/logout');
            setLoginState(false);
            alert('로그아웃 되었습니다!');
        }
        else {
            navigate('/login');
        }
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.leftBox} onClick={() => {navigate('/')}}>
            Nail<br/>Delluna
        </div>
        <div className={styles.rightBox}>
            <button id='login' className="headerBtn" onClick={handleLogin}>
                {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
            <button id='directions' className="headerBtn" onClick={navToPage}>
                오시는 길
            </button>
            <button id='service' className="headerBtn" onClick={navToPage}>
                서비스
            </button>
            <button id='product' className="headerBtn" onClick={navToPage}>
                상품
            </button>
            <button id='portfolio' className="headerBtn" onClick={navToPage}>
                구경하기
            </button>
            <button id='board' className="headerBtn" onClick={navToPage}>
                게시판
            </button>
        </div>
    </div>
  )
}
