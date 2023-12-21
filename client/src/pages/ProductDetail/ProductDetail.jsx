// ProductDetail.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Reservation from '../Reservation/Reservation';
import styles from './ProductDetail.module.css'; // Import the CSS file

export default function ProductDetail() {
    const location = useLocation();
    const { productName, info, price, picture} = location.state;
    const navigate = useNavigate();

    const [customerName, setCustomerName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const handleCustomerName = (e) => {
        setCustomerName(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.asdf}>
        <img src={picture} alt="서비스 이미지" className={styles.productImage} />
        <div className={styles.productDetails}>
          <p>
            제품명 <span>{productName}</span>
          </p>
          <p>
            가격 <span>{price}원</span>
          </p>
          <div>
            <p>
              정보 {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}