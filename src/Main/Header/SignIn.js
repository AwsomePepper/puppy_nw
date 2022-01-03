
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';






class SignIn extends Component{
  render() {
    return (
      <div class="container mt-5">
        <div class="row">
          <form onSubmit={(e) => {
            e.preventDefault(); //form의 기본기능 막기
            const email = e.target['0'].value;
            const pwd = e.target['1'].value;

            const formData = new FormData();
            formData.append("email", email);
            formData.append("pwd", pwd);

            axios({
              url: 'http://localhost:8080/api/signin',
              method: 'post',
              data: formData
            }).then((res) => {
              console.log(res.data);
              if (res.data.code === 200) {
                //로그인 성공
                alert('로그인 되었습니다');
                //JWT와 같은 토큰값을 저장
                //sessionStorage.setItem("token", 1234);
              } else { //로그인 실패
                alert('이메일과 비밀번호를 확인해주세요.');
              }

            })

          }}>
            <div class="mb-3 input-group flex-nowrap">
              <span class="input-group-text">✉️</span>
              <input type="text" class="form-control" name="email" placeholder="email" />
            </div>
            <div class="mb-3 input-group flex-nowrap">
              <span class="input-group-text">🔒</span>
              <input type="password" class="form-control" name="pwd" placeholder="password" />
            </div>
            <div class="d-grid gap-2">
              <button style={{ 'backgroundColor': '#2C6BB2' }} class="btn" id="signin">Log In</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

  export default SignIn;





