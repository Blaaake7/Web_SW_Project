// Board.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Board.module.css';

export default function Board() {
  const [boardData, setBoardData] = useState();
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
    navigate('/board/write')
  }

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