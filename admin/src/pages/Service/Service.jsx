import React, { useState } from 'react'
import styles from './Service.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Service() {
  
    const navigate = useNavigate();

    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://43.202.228.228:8080/service')
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
  })
  }, []);
  
  const handleDelete = (id) => {
    axios.post('http://43.202.228.228:8080/admin/deleteService', {
      serviceId: id
    })
    .then((res) => {
      axios.get('http://43.202.228.228:8080/service')
      .then((res) => {
        alert('삭제하였습니다')
        const newData = [...res.data]
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }

    return (
    <div>
      <div className={styles.header} style={{display: "flex"}}>
        <div>
			    <h2> 서비스 관리 </h2>
          <div>
			    	<button className={styles.button}
			    			onClick={() => navigate("/service/create")}
			    	>
			    		생성하기
			    	</button>
			    </div>
        </div>
		  </div>
      {data && data.map((each, idx) => (
        <div key={idx} style={{display: "flex", margin: "24px 250px", border: "1px solid gray", padding: "20px"}}>
          <img src={each.picture} alt='서비스 이미지' style={{marginLeft: "48px"}}/> 
          <div style={{marginLeft: "48px"}}>
            <div>
              {each.serviceName}
            </div>
            <div>
              {each.price}원
            </div>
            <div>
              {each.timeTaken}분
            </div>
            <div>
              {each.info}
            </div>
          </div>
          <button onClick={() => {handleDelete(each.serviceId)}} className={styles.deleteButton}>
            삭제
          </button>
        </div>
        ))}
    </div>
  )
}
