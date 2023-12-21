import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Reservation from '../Reservation/Reservation';



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
    <div style={{whiteSpace: "pre", margin: "105px 0", position: "relative"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <img src={picture} alt='서비스 이미지' style={{width: "370px", height: "400px"}} />
            <div style={{marginLeft: "70px"}}>
                <p>제품명   <span style={{fontWeight: "550", fontSize: "17px"}}>{productName}</span></p>
                <p>가격   <span style={{fontWeight: "550", fontSize: "17px"}}>{price}원</span></p>
                <p>정보   <span style={{fontWeight: "550", fontSize: "17px"}}>{info}</span></p>
            </div>
        </div>
    </div>
  )
}
