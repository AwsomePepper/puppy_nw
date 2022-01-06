
import axios from 'axios';
import React, { Component } from 'react';
import Header from './Header';




function SignIn () {
    return (
      <div>
        <Header />
        <div className="row justify-content-center"
        style={{'margin':'auto','margin-bottom':'200px','margin-top':'100px','width':'700px'}}>          
        <form  onSubmit={(e) => {
            e.preventDefault(); //form의 기본기능 막기
            const email = e.target['0'].value;
            const pwd = e.target['1'].value;

            const formData = new FormData();
            formData.append("email", email);
            formData.append("pwd", pwd);

            axios({
              url: 'http://localhost:8080/signin',
              method: 'post',
              data: formData
            }).then((res) => {
              console.log(res.data);
              if(res.data) {
                window.location = '/map'
              } else {
                console.log('fail');
              }
            })

          }}>
           
            <div className="mb-3 input-group flex-nowrap " style={{'width':'90%','height':'30%'}} >
              <span className="input-group-text " >✉️</span>
              <input type="text" className="form-control" name="email" placeholder="이메일" />
            </div>
            <div className="mb-3 input-group flex-nowrap" style={{'width':'90%','height':'30%'}}>
              <span className="input-group-text">🔒</span>
              <input type="password" className="form-control" name="pwd" placeholder="비밀번호" />
            </div>
            <div className="d-grid gap-2" style={{'width':'70%','height':'30%','margin':'auto'}}>
              <button style={{ 'backgroundColor': '#4DB6AC' }} className="btn" id="signin">Log In</button>
            </div>
          </form>
        </div>
        </div>
        
    )
  }


  export default SignIn;




