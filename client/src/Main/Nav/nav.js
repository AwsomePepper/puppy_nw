
import React, { Component, useEffect, useState } from 'react';
import './Nav.css';
import Header from '../Header/Header';
import axios from 'axios';



function Nav()  {  //메뉴

 
    
    return (
      <div>
      <nav style={{ 'backgroundColor':'#E0E0E0'}} className="navbar navbar-expand-lg navbar-light justify-content-center  naver-fixed-top">
          <div style={{'text-align':'center'}}></div>
          <div>{sessionStorage.getItem('name')+"님 접속"}</div>
            <div className='text1'>&nbsp;&nbsp;&nbsp;멍</div>
            <div className='text2'>&nbsp;트</div>
            <div className='text3'>&nbsp;워</div>
            <div className='text4'>&nbsp;크 </div>
            <img src='./images/logo.png' style={{'margin-left':'10px','margin-right':'10px'}}/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{'color':'#F44336'}}><a className="nav-link" href="/" >Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/map">Map</a></li>
              <li className="nav-item"><a className="nav-link" href="/signin">Log In</a></li>
              <li className="nav-item"><a className="nav-link" href="/signup">Sign Up</a></li>
              <li className="nav-item"><a className="nav-link" href="/mypage">My Page</a></li>
              <li className="nav-item"><a className="nav-link" href="/" >Log Out</a></li>

            </ul>
          
        </div>
      </nav>
      </div>
  
    )
  }

export default Nav;
