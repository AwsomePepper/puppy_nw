
import axios from 'axios';
import React, { Component } from 'react';
import Header from './Header';

const SignUp = () => {
  return (
    <div>
    <Header />
    <div class="container mt-5">
      <div className= "row justify-content-center"
        style={{'margin':'auto','margin-bottom':'200px','margin-top':'100px','width':'600px'}}>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          const email = e.target['0'].value;
          const pwd = e.target['1'].value;
          const name = e.target['2'].value;
          formData.append("email", email);
          formData.append("pwd", pwd);
          formData.append("name", name);

          axios({
            url: 'http://localhost:8080/signup',
            method: 'post',
            data: formData,
          }).then((res) => {
            console.log(res.data);
            window.location = '/signin';
          }); //response
        }}>
           <div className="mb-3 input-group flex-nowrap" style={{'width':'90%','height':'20%'}}>
              <span className="input-group-text">✉️</span>
              <input type="text" className="form-control" name="email" placeholder="이메일" />
            </div>
            <div className="mb-3 input-group flex-nowrap" style={{'width':'90%','height':'20%'}}>
              <span className="input-group-text">🔒</span>
              <input type="password" className="form-control" name="pwd" placeholder="비밀번호" />
          </div>
          <div className="mb-3 input-group flex-nowrap" style={{'width':'90%','height':'20%'}}>
              <span className="input-group-text">😊</span>
              <input type="text" className="form-control" name="name" placeholder="이름" />
          </div>
          <div class="d-grid gap-2" style={{'width':'70%','height':'20%','margin':'auto'}}>
            <button style={{ 'backgroundColor': '#4DB6AC' }} class="btn" id="signup">Sign Up</button>
          </div>
        </form>
      </div>

    </div>
    </div>
  )
}


  export default SignUp;