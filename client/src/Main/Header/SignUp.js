
import axios from 'axios';
import React, { Component } from 'react';


const SignUp = () => {
  return (
    <div class="container mt-5">
      <div className= "row justify-content-center"
        style={{'margin':'auto','margin-bottom':'200px','margin-top':'200px','width':'900px'}}>
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
            url: 'http://127.0.0.1:8080/api/signup',
            method: 'post',
            data: formData,
          }).then((res) => {
            console.log(res.data);
            window.locattion = '/';
          }); //response
        }}>
          <div class="mb-3">
            <label for="email">Email:</label>
            <input type="text" class="form-control" id="email" name="email" />
          </div>
          <div class="mb-3">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" name="pwd" />
          </div>
          <div class="mb-3">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" name="name" />
          </div>
          <div class="d-grid gap-2">
            <button style={{ 'backgroundColor': '#2C6BB2' }} class="btn" id="signup">Sign Up</button>
          </div>
        </form>
      </div>

    </div>
    
  )
}





  export default SignUp;