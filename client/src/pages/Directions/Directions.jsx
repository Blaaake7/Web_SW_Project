import React from 'react'
import styles from './Directions.module.css'
import directionsImage from '../../Image/location.jpg'
import PlaceIcon from '@mui/icons-material/Place';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CallIcon from '@mui/icons-material/Call';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


export default function Directions() {
  
    return (
    <div style={{"textAlign": "center"}}>
      <h2>오시는 길</h2>
      <div className={styles.wrapper}>
        <img src={directionsImage} alt="Directions" className={styles.locationImg}/>
        <div className={styles.rightBox}>
          <div className={styles.content}>
            <AutoFixHighIcon /> 네일 델루나
          </div>
          <div className={styles.content}>
            <PlaceIcon /> 주소 <br/><p>인천광역시 서구 청라커낼로 163</p>
          </div>
          <div className={styles.content}>
            <DirectionsBusIcon /> 대중교통 <br/><p>701, 7700번 청라 중앙호수공원 입구 하차</p>
          </div>
          <div className={styles.content}>
            <CallIcon /> 대표번호 <br/><p>0507-1358-7017</p>
          </div>
        </div>
      </div>
    </div>
  )
}
