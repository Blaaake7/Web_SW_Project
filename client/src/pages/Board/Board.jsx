import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Board() {
  
    const [boardData, setBoardData] = useState();


  useEffect(() => {
    axios.get('http://43.202.228.228:8080/board')
    .then((res) => {
        setBoardData(res.data);
        console.log(res.data);
    })
  }, []);

  const navigate = useNavigate();

  const navToWrite = () => {
    navigate('/board/write')
  }
  
    return (
    <div style={{maxWidth: '1200px', margin: 'auto'}}>
      <h2 style={{textAlign: "center", marginTop: "100px"}}>게시판</h2>
      <div style={{textAlign: "right", marginRight: "180px", marginTop: "48px", marginBottom: "64px"}}>
        <button onClick={navToWrite} style={{marginLeft: 'auto', padding: "3px 12px"}}>글쓰기</button>
      </div>
      <div style={{ margin: "24px", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div style={{width: "230px", fontWeight: "550"}}>
          제목
        </div>
        <div style={{marginLeft: "18px", width: "80px", fontWeight: "550" }}>
          작성자
        </div>
        <div style={{marginLeft: "18px", width: "170px", fontWeight: "550" }}>
          작성일
        </div>
      </div>
        {boardData && boardData.map((each, idx) => (
            <div key={idx} style={{ margin: "21px 0", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <div style={{width: "230px"}}>
                {each.title}
              </div>
              <div style={{marginLeft: "18px", width: "80px" }}>
                {each.author}
              </div>
              <div style={{marginLeft: "18px", width: "170px" }}>
                {each.date}
              </div>
            </div>
        ))}
        
    </div>
  )
}
