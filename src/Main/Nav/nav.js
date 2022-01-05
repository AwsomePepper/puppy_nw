
import React, { Component } from 'react';
// import './App.css';


function Nav()  {  //메뉴

    return (
      <nav style={{ 'backgroundColor':'#FFEE58'}} className="navbar navbar-expand-lg navbar-light naver-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand " href="/" >멍트워크</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="/map">Map</a></li>
              <li className="nav-item"><a className="nav-link" href="/signin">Log In</a></li>
              <li className="nav-item"><a className="nav-link" href="/signup">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
  
    )
  }

export default Nav;
