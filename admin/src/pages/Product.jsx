import React, { useState } from 'react'
import styles from './Product.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Product() {
  
    const navigate = useNavigate();

    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://43.202.228.228:8080/product')
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
  })
  }, []);
  
  const handleDelete = (id) => {
    axios.post('http://43.202.228.228:8080/admin/deleteProduct', {
      productId: id
    })
    .then((res) => {
      console.log(res)
      axios.get('http://43.202.228.228:8080/product')
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
			    <h2> 상품 관리 </h2>
          <div>
			    	<button className={styles.button}
			    			onClick={() => navigate("/product/create")}
			    	>
			    		생성하기
			    	</button>
			    </div>
        </div>
		  </div>
      {data && data.map((each, idx) => (
        <div key={idx} style={{display: "flex", margin: "24px 250px", border: "1px solid gray", padding: "20px"}}>
          <img src={each.picture} alt='서비스 이미지' style={{marginLeft: "48px", width: "200px", height: "200px"}}/> 
          <div style={{marginLeft: "48px"}}>
            <div>
              {each.productName}
            </div>
            <div>
              {each.price}원
            </div>
            <div>
              {each.info}
            </div>
          </div>
          <button onClick={() => {handleDelete(each.productId)}} className={styles.deleteButton}>
            삭제
          </button>
        </div>
        ))}
    </div>
  )
}
