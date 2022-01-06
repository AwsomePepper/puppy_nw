import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const Footer2 = () => {
    return (
    <footer class="site-footer">
      <div class="container fixed" style={{'height':'150px'}}>
        <div class="row">
          <div class="col-sm-12 col-md-6" >
            <h6>About</h6>
            <p class="text-justify">It's fun to take a stroll with a dog!</p>
            <p class="text-justify">🐶We Love Dog🐶</p>
          </div>

          <div class="col-xs-6 col-md-3" >
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>Adress : 서울시 강남구 압구정로</li>
              <li>Call : 070-7777-7777</li>
              <li>전화 상담 시간 : 9:00 - 18:00</li>
              <li>전화 상담 불가 시간: 12:00 - 14:00</li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://localhost:3000/">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container fixed-bottom" >
        <div class="row">
          <div class="col-md-5 col-sm-6 col-xs-12"style={{'margin':'auto'}}>
            <p class="copyright-text ">Copyright &copy; 2022 All Rights Reserved by 
         <a> MTW</a>.
            </p>
          </div>
         </div> 
      </div>
</footer>
  
        
    )
}


export default Footer2;


