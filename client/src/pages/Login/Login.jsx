import React, { useEffect, useState } from "react";
// import "./LogIn.css";
import { Link, redirect, useSearchParams } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from '../../Image/logo.jpg'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios.post('http://43.202.228.228:8080/login', {
      userid: email,
      userpw: password
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem('login', res.data.result);
      navigate('/');
    })
  }

  return (
      <div className="login_body">
        <form className="login" action="/loginURL" method="post">
          <div className="amuse_login_title">
            <img
              className="amuse_logo"
              src={logo}
              alt="어뮤즈 이미지"
            />
            <h2 className="amuse_title_top">언제나 편안한 곳</h2>
            <h2 className="amuse_title_bottom">네일 델루나</h2>
          </div>
          <div className="input">
            <div className="email">
              <EmailInput email={email} handleChangeEmail={handleChangeEmail} />
            </div>
            <div className="password">
              <PasswordInput password={password} handleChangePassword={handleChangePassword} />
            </div>
          </div>
          <div className="login_btn_box">
            <button className="login_btn" onClick={handleLogin}>
              <i className="fa-solid fa-door-open"></i>로그인
            </button>
          </div>
        </form>
        <div className="v_box">
          <div className="login_function_box">
            <div className="signup_box">
              <span>아직 가입하지 않으셨나요?</span>
              <Link to="/SignUp">
                <span className="signup_link">회원가입</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

  );
}