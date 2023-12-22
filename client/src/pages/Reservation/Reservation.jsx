import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './Reservation.module.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Reservation({serviceId, customerName, date, phoneNumber, handleCustomerName, handleDate, handlePhoneNumber, course}) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleReservation = () => {
    let courseId = [];
    course.map((each) => {
      courseId.push(each.courseId)
    })

    const reservation = {
      serviceId: serviceId,
      customerName: customerName,
      phoneNumber: phoneNumber,
      date: date,
      courseId: courseId,
      totalPrice: 30000
    }

    console.log(reservation)
    axios.post('http://43.202.228.228:8080/reservation', reservation)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });
    alert('예약을 완료했습니다')
    navigate('/service');
  }

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOpen}>예약하기</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            예약
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            예약을 위해 고객님의 인적사항을 입력해주세요
          </Typography>
        <div style={{display: "flex", flexDirection: "column"}}>
            <label style={{marginTop: "12px", fontWeight: "550"}}>날짜</label>
              <input type='date' value={date} onChange={(e) => handleDate(e)} style={{width: "120px", margin: "12px"}} className='reserveModalInput'/>
            <label style={{marginTop: "12px", fontWeight: "550"}}>성함</label>
              <input type='text' value={customerName} onChange={(e) => handleCustomerName(e)} style={{margin: "12px"}} className='reserveModalInput'/>
            <label style={{marginTop: "12px", fontWeight: "550"}}>전화번호</label>
              <input type='text' value={phoneNumber} onChange={(e) => handlePhoneNumber(e)} style={{margin: "12px"}} className='reserveModalInput'/>
        </div>
        <div style={{textAlign: "right", marginRight: "16px"}} className='reserveModalBtn'>
            <button onClick={handleReservation}>예약 완료</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}