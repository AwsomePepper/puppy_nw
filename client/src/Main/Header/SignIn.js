
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
              console.log(res.data.name);
              console.log(res.data.puppyList[0]);
              if(res.data) {
                let pNameStr='', pAgeStr=0, pGenderStr='', pBreedStr='', pMeetStr='';
                for (let i = 0; i < res.data.puppyList.length; i++) {
                  pNameStr += res.data.puppyList[i].pname +'   ';
                  pAgeStr += res.data.puppyList[i].page +'   ';
                  pGenderStr += res.data.puppyList[i].pgender +'   ';
                  pBreedStr += res.data.puppyList[i].pbreed +'   ';
                  pMeetStr += res.data.puppyList[i].pmeet +'   ';
                }

                sessionStorage.setItem('name', res.data.name);
                sessionStorage.setItem('email', res.data.email);
                sessionStorage.setItem('pName', pNameStr); //강아지 이름
                sessionStorage.setItem('pAge', pAgeStr); //강아지 나이
                sessionStorage.setItem('pGender', pGenderStr);   //강아지 성별
                sessionStorage.setItem('pBreed', pBreedStr); //견종
                sessionStorage.setItem('pMeet', pMeetStr); //사회성 정도 (상/중/하)
                // sessionStorage.setItem('email', res.data.puppyList);
                // sessionStorage.setItem('email', res.data.puppyList);
                // sessionStorage.setItem('name', res.data.puppyList);
                // sessionStorage.setItem('email', res.data.puppyList);
                //window.location = '/'

                // console.log(res.data.pmeet);
              } else {
                alert('fail');
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




