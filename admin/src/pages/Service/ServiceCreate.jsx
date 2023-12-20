import React, { useState } from 'react'
import styles from './ServiceCreate.module.css'
import axios from 'axios'
import CourseModal from './CourseInfo/CourseModal';
export default function ServiceCreate() {

  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState();
  const [info, setInfo] = useState("");
  const [time, setTime] = useState();
  const [course, setCourse] = useState([]);
  const [show, setShow] = useState(false);

  const handleServiceName = (event) => {
    setServiceName(event.target.value);
  }

  const handlePrice = (event) => {
    setPrice(event.target.value);
  }

  const handleInfo = (event) => {
    setInfo(event.target.value);
  }

  const handleTime = (event) => {
    setTime(event.target.value);
  }

  const handleCourse = (values) => {
    const currentItems = [...course];

    setCourse([...currentItems, values])
  }

  const [imagePreview, setImagePreview] = useState('');
  const [base64Image, setBase64Image] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setBase64Image(reader.result.split(',')[1]); // base64 데이터 추출
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const product = {
      serviceName: serviceName,
      price: price,
      info: info,
      timeTaken: 50,
      course: course,
      picture: base64Image
    }
    axios.post('http://43.202.228.228:8080/admin/addService', product)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <label>서비스 </label>
        <input value={serviceName} onChange={handleServiceName} placeholder='내용을 입력하세요'/>
      </div>
      <div className={styles.category}>
        <label>가격 </label>
        <input value={price} onChange={handlePrice} placeholder='내용을 입력하세요'/>
      </div>
      <div className={styles.category}>
        <label>시간 </label>
        <input value={time} onChange={handleTime} placeholder='내용을 입력하세요'/>
      </div>
      <div className={styles.category}>
        <label>내용 </label>
        <br/>
        <textarea value={info} onChange={handleInfo} placeholder='내용을 입력하세요'/>
      </div>
      <div className={styles.category}>
        <label>
          업로드 할 사진
          <br/>
          <input type="file" accept="image/*" onChange={handleImageChange} style={{marginTop: '16px'}} />
          {imagePreview && (
          <div>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: '400px', maxHeight: '400px' }} />
          </div>
          )}
        </label>
      </div>
      <CourseModal handleCourse={handleCourse}/>
      <div>
        {course.map((each) => (
        <div style={{ maxWidth: '1200px', display: 'flex', padding: '20px', textAlign: 'center', border: '2px solid gray', borderRadius: '6px', fontSize: '18px', fontWeight: '580', color: '#444444', margin: '6px', justifyContent: 'space-between'}}>
          <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            <p style={{ maxWidth: '850px', wordBreak: 'break-all' }}>이름 : {each.courseTitle}</p>
            <p style={{ maxWidth: '850px', wordBreak: 'break-all' }}>내용 : {each.courseInfo}</p>
            <p style={{ maxWidth: '850px', wordBreak: 'break-all' }}>가격 : {each.price}</p>
          </div>
          <img src={each.imageURL} alt='코스 이미지' style={{ width: '200px', height: '150px', marginLeft: '50px' }}/>
        </div>
        ))}
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
