import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Reservation.module.css'; // import your CSS file

export default function Reservation() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://43.202.228.228:8080/admin/reservation')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
  }, []);

  return (
    <div className={styles.reservationContainer}>
      <h2>예약 정보 확인</h2>
      {data && data.map((each, idx) => (
        <div key={idx} className={styles.reservationItem}>
          <div className={styles.indexColumn}>{idx + 1}.</div>
          <div className={styles.serviceInfo}>{each.serviceName}</div>
          <div className={styles.infoColumn}>
            <div className={styles.customerInfo}>{each.customerName}</div>
          </div>
          <div className={styles.phoneNumber}>{each.phoneNumber}</div>
          <div className={styles.dateColumn}>{each.date}</div>
          <div className={styles.priceColumn}>{each.totalPrice}원</div>
        </div>
      ))}
    </div>
  );
}