import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Reservation from '../Reservation/Reservation';



export default function ServiceDetail() {
  
    const location = useLocation();
    const { serviceName, info, price, timeTaken, course, picture} = location.state;
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
                <p>제품명   <span style={{fontWeight: "550", fontSize: "17px"}}>{serviceName}</span></p>
                <p>가격   <span style={{fontWeight: "550", fontSize: "17px"}}>{price}원 ~</span></p>
                <p>소요시간   <span style={{fontWeight: "550", fontSize: "17px"}}>{timeTaken}분</span></p>
                <p>정보   <span style={{fontWeight: "550", fontSize: "17px"}}>{info}</span></p>
                <p>코스 설명</p>
                {course.map((each, idx) => (
                    <div style={{backgroundColor: "rgb(248, 249, 250)", borderRadius: "6px", margin: '12px', padding: "8px", display: "flex", width: "600px"}}>
                        <img src={each.imageURL} alt='서비스 디테일' style={{width: "190px", height: "130px", borderRadius: "8px"}}/>
                        <div style={{marginLeft: "12px", borderLeft: "3.5px solid lightgray", paddingLeft: "10px", width: "370px", whiteSpace: 'normal'}}>
                            <p><span style={{fontWeight: "550", fontSize: "16px"}}>{each.courseTitle}</span></p>
                            <p><span style={{fontWeight: "550", fontSize: "16px"}}>{each.price}원</span></p>
                            <p style={{wordBreak: "break-all"}}>{each.courseInfo}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Reservation 
            customerName={customerName}
            date={date}
            phoneNumber={phoneNumber}
            handleCustomerName={handleCustomerName}
            handleDate={handleDate}
            handlePhoneNumber={handlePhoneNumber}
            style={{position: "absolute", top: "8px", right: "25%", backgroundColor: "#fff7d1", cursor: "pointer", border: "1px lightgray solid", fontSize: "20px", borderRadius: "6px", padding: "6px 8px"}}
            />
        </div>
    </div>
  )
}
