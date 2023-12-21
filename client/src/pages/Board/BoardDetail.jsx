import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function BoardDetail() {
    const location = useLocation();
    const { articleId, title, content, author, date } = location.state;


    return (
        <div style={{ padding: "50px", maxWidth: "1000px", margin: "auto" }}>
            <div style={{ marginLeft: "70px" }}>
                <p>글 제목   <span style={{ fontWeight: "550", fontSize: "17px" }}>{title}</span></p>
                <p>글 내용   <span style={{ fontWeight: "550", fontSize: "17px" }}></span></p>
                <p>   <span style={{ fontWeight: "550", fontSize: "17px" }}>{content}</span></p>
                <p>작성자   <span style={{ fontWeight: "550", fontSize: "17px" }}>{author}</span></p>
                <p>작성 시간  <span style={{ fontWeight: "550", fontSize: "17px" }}>{date}</span></p>
            </div>
        </div>
    )
}