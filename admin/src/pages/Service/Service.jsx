import React from 'react'
import styles from './Service.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Service() {
  
    const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://43.202.228.228:8080/service')
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])

    return (
    <div>
        <div className={styles.header}>
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
  )
}
