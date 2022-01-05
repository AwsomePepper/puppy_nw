
import axios from 'axios';
import React, { Component } from 'react';




function SignIn () {
    return (
        <div className="row justify-content-center"
        style={{'margin':'auto','margin-bottom':'200px','margin-top':'200px','width':'900px'}}>          
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
            <div className="mb-3 input-group flex-nowrap">
              <span className="input-group-text">✉️</span>
              <input type="text" className="form-control" name="email" placeholder="email" />
            </div>
            <div className="mb-3 input-group flex-nowrap">
              <span className="input-group-text">🔒</span>
              <input type="password" className="form-control" name="pwd" placeholder="password" />
            </div>
            <div className="d-grid gap-2">
              <button style={{ 'backgroundColor': '#2C6BB2' }} className="btn" id="signin">Log In</button>
            </div>
          </form>
        </div>
  
    )
  }


  export default SignIn;




