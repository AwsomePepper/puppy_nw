
import React, { Component } from 'react';
import './Nav.css';


function Nav()  {  //메뉴
    const userLogin = false;

    return (
      
      <nav style={{ 'backgroundColor':'rgb(240, 230, 138)'}} className="navbar navbar-expand-lg navbar-light justify-content-center  naver-fixed-top">
          <div style={{'text-align':'center'}}></div>
            <div className='text'> 🐶멍 트 워 크🐶 </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/map">Map</a></li>
              <li className="nav-item"><a className="nav-link" href="/signin">Log In</a></li>
              <li className="nav-item"><a className="nav-link" href="/signup">Sign Up</a></li>
            </ul>
          
        </div>
      </nav>
  
    )
  }

export default Nav;
