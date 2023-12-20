import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();
    const [login, setLogin] = useState(false);

    const navToPage = (event) => {
        const targetDiv = event.target.id;
        navigate(`/${targetDiv}`);
    }

    useEffect(() => {
        const loginStatus = localStorage.getItem('login');
        setLogin(loginStatus === 'true');
    }, []);

    const handleLogin = () => {
        if (login) {
            localStorage.setItem('login', 'false');
            setLogin(false);
            alert('로그아웃 되었습니다!')
        }
        else {
            navigate('/login')
        }
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.leftBox} onClick={() => {navigate('/')}}>
            Nail<br/>Delluna
        </div>
        <div className={styles.rightBox}>
            <button id='login' className="headerBtn" onClick={handleLogin}>
                {login ? '로그아웃' : '로그인'}
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
