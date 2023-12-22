import React, { useEffect, useState } from "react";
// import "./LogIn.css";
import { Link, redirect, useSearchParams } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from '../../Image/logo.jpg'

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [pwdFlage, setPwdFlag] = useState(true);
  const [pwdIsRegex, setPwdIsRegex] = useState(true);

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  useEffect(() => {
    if(password != "") {
      if(passwordRegex.test(password)) {
        setPwdIsRegex(true);
      }
      else {
        setPwdIsRegex(false);
      }
    }
  }, [password])

  useEffect(() => {
    if(password != "" && passwordCheck != "") {
      if(password != passwordCheck) {
        setPwdFlag(false);
      }
      else {
        setPwdFlag(true);
      }
    }
  }, [password, passwordCheck]);

  const handleSignUp = () => {
    const info = {
      userid: email,
      userpw: password
    }
    axios.post('http://43.202.228.228:8080/register', info)
    .then((res) => {
      alert('회원가입이 완료 되었습니다')
      navigate('/');
    })
  }

  return (
      <div className="login_body">
        <div className="amuse_login_title">
          <img
            className="amuse_logo"
            src={logo}
            alt="어뮤즈 이미지"
          />
          <h2 className="amuse_title_top">회원가입</h2>
          <h2 className="amuse_title_bottom">네일 델루나</h2>
        </div>
        <div className="input">
          <div className="email">
            <EmailInput email={email} handleChangeEmail={handleChangeEmail} />
          </div>
          <div className="password">
            <PasswordInput password={password} handleChangePassword={handleChangePassword} flag={true}/>
          </div>
          <p style={{color: "red", fontWeight: "550", fontSize: "13px"}}>
          {pwdIsRegex ? "" : "비밀번호는 8자리 이상이며, 적어도 하나의 숫자와 특수문자를 포함해야합니다."}
          </p>
          <div className="password">
            <PasswordInput password={passwordCheck} handleChangePassword={handleChangePasswordCheck} />
          </div>
          <p style={{color: "red", fontWeight: "550", fontSize: "13px"}}>
          {pwdFlage ? "" : "입력하신 비밀번호가 다릅니다."}
          </p>
        </div>
        <div className="login_btn_box">
          <button className="login_btn" onClick={handleSignUp}>
            <i className="fa-solid fa-door-open"></i>회원가입
          </button>
        </div>
        <div className="v_box">
          <div className="login_function_box">
            <div className="signup_box">
              <span>이미 아이디가 있으신가요?</span>
              <Link to="/login">
                <span className="signup_link">로그인</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

  );
}
