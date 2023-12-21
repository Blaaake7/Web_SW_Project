import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../atom';
import axios from 'axios';

export default function MobileHeader() {
  const [open, setOpen] = React.useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const isLoggedIn = useRecoilValue(loginState);
  const setLoginState = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth <= 450);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navToPage = (event) => {
    const targetDiv = event.target.id;
    navigate(`/${targetDiv}`);
  };

  return (
    <div style={{zIndex: '100'}}>
      <AppBar position="sticky" sx={{ bgcolor: '#79502c' }}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick} // 클릭 이벤트 처리
          >
            <MenuIcon sx={{ borderRadius: '6px' }} />
          </IconButton>
      </AppBar>
      {/* 요소들 */}
      {open && (
        <Box sx={{ p: 2, bgcolor: 'background.paper', position: 'absolute', width: "100px", right: '0px', height: '228px', backgroundColor: '#79502c', color: "white"}}>
          {isLoggedIn ? 
          <>
          <Typography onClick={()=>{navigate('/'); setOpen(false); axios.post('http://43.202.228.228:8080/logout');
          setLoginState(false); alert('로그아웃 되었습니다')}} 
          sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', "&:hover": { bgColor: '#fff'}}}>로그아웃</Typography>
          <Typography onClick={()=>{navigate('/directions'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>오시는 길</Typography>
          <Typography onClick={()=>{navigate('/service'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>서비스</Typography>
          <Typography onClick={()=>{navigate('/product'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>상품</Typography>
          <Typography onClick={()=>{navigate('/portfolio'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>구경하기</Typography>
          <Typography onClick={()=>{navigate('/board'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>게시판</Typography>
          </> : 
          <>
          <Typography onClick={()=>{navigate('/login'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', "&:hover": { bgColor: '#fff'}}}>로그인</Typography>
          <Typography onClick={()=>{navigate('/directions'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>오시는 길</Typography>
          <Typography onClick={()=>{navigate('/service'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>서비스</Typography>
          <Typography onClick={()=>{navigate('/product'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>상품</Typography>
          <Typography onClick={()=>{navigate('/portfolio'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>구경하기</Typography>
          <Typography onClick={()=>{navigate('/board'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>게시판</Typography>
          </>}
        </Box>
      )}
    </div>
  );
}