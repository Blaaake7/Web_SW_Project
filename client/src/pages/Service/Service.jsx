import React, { useEffect, useState } from 'react'
import styles from './Service.module.css'
import axios from 'axios'
export default function Service() {
  const [serviceData, setServiceData] = useState();
  
  useEffect(() => {
    axios.get('http://43.202.228.228:8080/service')
    .then(response => {
      console.log(response.data);
      setServiceData(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  
  return (
    <div className={styles.wrapper}>
      {serviceData && serviceData.map((service, idx) => (
        <div className={styles.serviceWrapper}>
          <img src={service.picture} alt='Service Image' />
          <div key={idx}>{service.info}</div>
          <div key={idx}>{service.serviceName}</div>
          <div key={idx}>{service.price}</div>
        </div>
      ))}
    </div>
  )
}
