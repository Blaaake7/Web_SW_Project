// ServiceDetail.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Reservation from '../Reservation/Reservation';
import styles from './ServiceDetail.module.css';

export default function ServiceDetail() {
  const location = useLocation();
  const { serviceId, serviceName, info, price, timeTaken, course, picture } = location.state;
  const navigate = useNavigate();

  const [customerName, setCustomerName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleCustomerName = (e) => {
    setCustomerName(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={picture} alt='서비스 이미지' className={styles.serviceImage} />
        <div className={styles.details}>
          <p>
            제품명 <span style={{ wordBreak: 'break-all' }}>{serviceName}</span>
          </p>
          <p>
            가격 <span>{price}원 ~</span>
          </p>
          <p>
            소요시간 <span>{timeTaken}분</span>
          </p>
          <p className={styles.longInfo}>
            {info}
          </p>
          <p>코스 설명</p>
          {course.map((each, idx) => (
            <div key={idx} className={styles.courseContainer}>
              <img src={each.imageURL} alt='서비스 디테일' className={styles.courseImage} />
              <div className={styles.courseInfo}>
                <p>
                  <span>{each.courseTitle}</span>
                </p>
                <p>
                  <span>{each.price}원</span>
                </p>
                <p style={{ wordBreak: 'break-all' }}>{each.courseInfo}</p>
              </div>
            </div>
          ))}
        </div>
        <Reservation
          serviceId={serviceId}
          customerName={customerName}
          date={date}
          phoneNumber={phoneNumber}
          handleCustomerName={handleCustomerName}
          handleDate={handleDate}
          handlePhoneNumber={handlePhoneNumber}
          course={course}
          className={styles.reservationButton}
        />
      </div>
    </div>
  );
}