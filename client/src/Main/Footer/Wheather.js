import React, { useState, useEffect } from "react";
import axios  from 'axios';
//https://myanjini.tistory.com/entry/axios%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%82%A0%EC%94%A8-%EC%A0%95%EB%B3%B4-%EC%A1%B0%ED%9A%8C 참고
//날씨 key=58858a4d664316ac3cf99fa98a419c17
//지도에서 위도경도 받아와서 변경필요
function Weather() {
  const imgSrc = 'http://openweathermap.com/img/w/'+ +'.png';

   const [position, setPosition]=useState({
     temp: 0,
     desc: "", 
     wIcon: ""
    });

  //날씨 정보 조회 API사용 //useeffect
  useEffect(() => {
    console.log('날씨정보 조회');
    const cityName = 'Seoul';
    const apiKey = "";
    //'fa4b07a80b959ffc78d0ac7f7a65125a'; <- apiKey에 넣기
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;

    //axios 라이브러리 이용 
    axios.get(url).then(responseData => {
      console.log('axios');
      const data = responseData.data;
      setPosition({//
        temp: data.main.temp,
        desc: data.weather[0].description,
        wIcon: 'http://openweathermap.com/img/w/'+ data.weather[0].icon +'.png'
       
      });

    }).catch(error => console.log(error));

    
  },[]);

  return (
    
    <footer className="py-5" style={{'background':'#E0E0E0','margin-left':'70%'}} >
      <div className="container" >
        <p className="text-black" style={{'font-size':'30px'}}  > 
        <div>
        <div>
        <div className="connect" style={{'font-size':'20px'}}>
          {sessionStorage.getItem,"🌻"+('name')+"님 접속"}</div>
        <img src={position.wIcon}/><a>현재 날씨 :&nbsp;{(position.temp-273).toFixed(2)} </a>
        </div>
        </div>
        {position.desc}</p></div>
    </footer>

  );
}

export default Weather;