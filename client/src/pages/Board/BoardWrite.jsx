import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BoardWrite() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleContent = (e) => {
    setContent(e.target.value);
  }

  const handleWrite = () => {
    axios.post('http://43.202.228.228:8080/board/write', {
        title: title,
        content: content,
        author: localStorage.getItem("userid")
    })
    .then((res) => {
        console.log(res.data)
        navigate('/board');
    })
  }
  
    return (
    <div style={{padding: "50px", maxWidth: "1000px", margin: "auto"}}>
        <h2>게시판 글쓰기</h2>
        <div style={{display: "flex", flexDirection: "column"}}>
            <input value={title} onChange={handleTitle} placeholder='제목' style={{width: "450px", height: "32px", marginTop: "18px"}}/>
            <textarea value={content} onChange={handleContent} placeholder='내용' style={{height: "300px", marginTop: "40px"}}/>
            <button style={{width: "180px", marginTop: "24px"}} onClick={handleWrite}>작성 완료</button>
        </div>
    </div>
  )
}
