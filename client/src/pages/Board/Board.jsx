// Board.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Board.module.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../atom';

export default function Board() {
  const [boardData, setBoardData] = useState();
  const isLoggedIn = useRecoilValue(loginState);
  const setLoginState = useSetRecoilState(loginState);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    axios.get('http://43.202.228.228:8080/board').then((res) => {
      setBoardData(res.data);
      console.log(res.data);
    });
  }, []);

  const navigate = useNavigate();
  const navToDetail = (boardData) => {
    navigate(`/board/${boardData.articleId}`, {
      state: {
        articleId: boardData.articleId,
        title: boardData.title,
        content: boardData.content,
        author: boardData.author,
        date: boardData.date
      },
    })
  }
  const navToWrite = () => {
    if(isLoggedIn == true) {
      navigate('/board/write');
    }
    else {
      alert('로그인이 필요합니다')
      navigate('/login');
    }
  };

  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>게시판</h2>
      <div className={styles.buttonContainer}>
        <button onClick={navToWrite} className={styles.button}>
          글쓰기
        </button>
      </div>
      <div className={styles.header}>
        <div className={styles.itemTitle}>제목</div>
        <div className={styles.itemAuthor}>작성자</div>
        <div className={styles.itemDate}>작성일</div>
      </div>
      {boardData &&
        boardData.map((each, idx) => (
          <div key={idx} className={`${styles.itemContainer} ${hoveredIndex === idx ? styles.hovered : ''}`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navToDetail(boardData[idx])}

          >
            <div className={styles.itemTitle}>{each.title}</div>
            <div className={styles.itemAuthor}>{each.author}</div>
            <div className={styles.itemDate}>{each.date}</div>
          </div>
        ))}
    </div>
  );
}