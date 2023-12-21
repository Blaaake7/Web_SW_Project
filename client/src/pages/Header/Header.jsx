import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../atom';
import axios from 'axios';
import * as React from 'react';
import MobileHeader from './MobileHeader';



export default function Header() {
  const isLoggedIn = useRecoilValue(loginState);
  const setLoginState = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth <= 450);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navToPage = (event) => {
    const targetDiv = event.target.id;
    navigate(`/${targetDiv}`);
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      axios.post('http://43.202.228.228:8080/logout');
      setLoginState(false);
      alert('로그아웃 되었습니다!');
    } else {
      navigate('/login');
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBox} onClick={() => navigate('/')}>
        Nail<br />Delluna
      </div>
      {isSmallScreen ? (<MobileHeader />) :
      (
        <div className={styles.rightBox}>
          <button id="login" className="headerBtn" onClick={handleLogin}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </button>
          <button id="directions" className="headerBtn" onClick={navToPage}>
            오시는 길
          </button>
          <button id="service" className="headerBtn" onClick={navToPage}>
            서비스
          </button>
          <button id="product" className="headerBtn" onClick={navToPage}>
            상품
          </button>
          <button id="portfolio" className="headerBtn" onClick={navToPage}>
            구경하기
          </button>
          <button id="board" className="headerBtn" onClick={navToPage}>
            게시판
          </button>
        </div>
      )}
    </div>
  );
}