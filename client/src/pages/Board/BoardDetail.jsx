import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './BoardDetail.module.css';


export default function BoardDetail() {
    const location = useLocation();
    const { articleId, title, content, author, date } = location.state;


    return (
        <div style={{ padding: "50px", maxWidth: "1000px", margin: "auto" }}>
            <div style={{ marginLeft: "70px" }}>
                <p>글 제목   <span style={{ fontWeight: "550", fontSize: "17px", marginLeft: "18px" }}>{title}</span></p>
                <p style={{marginTop: "32px", borderBottom: "1px solid black", paddingBottom: "12px"}}>작성자   <span style={{ fontWeight: "550", fontSize: "17px", marginLeft: "18px" }}>{author} </span><span style={{marginLeft: "70%"}}> {date}</span></p>
                <p style={{marginTop: "42px"}}>   <span style={{ fontWeight: "550", fontSize: "17px" }}>{content}</span></p>
            </div>
        </div >
    )
}