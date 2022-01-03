import React, { Component } from 'react';
import './App.css'

class Header extends Component {
  render() {
      return(
        <div className="text-white text-center">
        <h1>
          <a href="/signin" className="link-dark">
            로그인 / 회원가입ㅣㅣ
          </a>
        </h1>
      </div>
      );
  }
}

export default Header;






