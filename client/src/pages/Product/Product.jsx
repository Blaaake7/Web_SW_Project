import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const [serviceData, setServiceData] = useState();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  

  // API 연결되면 데이터 받아오기
  useEffect(() => {
    axios.get('http://43.202.228.228:8080/product')
    .then(response => {
      console.log(response.data);
      setServiceData(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  
  const navToDetail = (service) => {
    navigate(`/product/${service.productId}`, {
      state: {
        productName: service.productName,
        info: service.info,
        price: service.price,
        picture: service.picture
      },
    });
  }

  return (
    <div className={styles.wrapper}>
      {serviceData && serviceData.map((service, idx) => (
        <div
        key={idx}
        className={`${styles.serviceWrapper} ${hoveredIndex === idx ? styles.hovered : ''}`}
        onMouseEnter={() => handleMouseEnter(idx)}
        onMouseLeave={handleMouseLeave}
        onClick={() => navToDetail(service)}
      >
          <img src={service.picture} alt='Service Image' className={styles.serviceImg} />
          <div key={idx} className={styles.serviceName}>{service.productName}</div>
          <div key={idx} className={styles.info}>{service.info.length > 18 ? `${service.info.substring(0, 18)}...` : service.info}</div>
          <div key={idx} className={styles.price}>{service.price}원</div>
        </div>
      ))}
    </div>
  )
}
