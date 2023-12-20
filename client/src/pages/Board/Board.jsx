import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Board() {
  
    const [boardData, setBoardData] = useState();


  useEffect(() => {
    axios.get('http://43.202.228.228:8080/board')
    .then((res) => {
        setBoardData(res.data);
    })
  }, []);
  
    return (
    <div>
        {boardData && boardData.map((each, idx) => (
            <div>
                {each.title}
            </div>
        ))}
    </div>
  )
}
