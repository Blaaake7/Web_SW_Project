import React from 'react'
import CallIcon from '@mui/icons-material/Call';

export default function Footer() {
  return (
    <div>
        <section id="contact" class="section">
            <h1 class="contact__title">Nail Delluna</h1>
            <h2 class="contact__email"><CallIcon/> 0507-1358-7017</h2>
            <div class="contact__icon">
                <a href="https://www.instagram.com/nail_delluna/" target="_blank" className='iconInFooter'>
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://map.naver.com/p/entry/place/1852644091?lng=126.6389341&lat=37.5259482&placePath=%2Fbooking&entry=plt&searchType=place&c=15.00,0,0,0,dh" target="_blank" className='iconInFooter'>
                    <i class="fa-brands fa-neos"></i>
                </a>
            </div>
            <p class="contact__rights">
                2023 Nail Delluna - All rights reserved
            </p>
        </section>
    </div>
  )
}
