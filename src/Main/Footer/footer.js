import React, { useState, useEffect } from "react";
import axios  from 'axios';
//https://myanjini.tistory.com/entry/axios%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%82%A0%EC%94%A8-%EC%A0%95%EB%B3%B4-%EC%A1%B0%ED%9A%8C 참고
//날씨 key=536c9ac88ce061e5682c2733f59941a5
//지도에서 위도경도 받아와서 변경필요
function Footer() {


   const [position, setPosition]=useState({
     position: [],
     temp: 0,
     desc: '', 
     icon: '', 
     loading: true});


         //날씨 정보 출력 
    //https://openweathermap.org/weather-conditions 아이콘 정보
    const wIcon = 'http://openweathermap.com/img/w/' + position.icon + '.png';
    const cTemp = (position - 273.15).toFixed(2);
    
  //날씨 정보 조회 API사용 //useeffect
  useEffect(() => {
    const cityName = 'Seoul';
    const apiKey = '536c9ac88ce061e5682c2733f59941a5';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '';
    //const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+127+'&lon='+37+'&appid='+apiKey+'';


    //axios 라이브러리 이용 
    axios.get(url).then(responseData => {
      console.log(responseData);
      const data = responseData.data;
      setPosition({//
        temp: data.main.temp,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        loading: false
      });

    }).catch(error => console.log(error));



    
  });

  return (
    
    <footer className="py-4 fixed-bottom" style={{'background':'#2196F3', 'opacity':'0.8' }}>
      
      <div className="container" >
        <div className="w-100 p-2" >Width 100%</div>
        <p className="m-0 text-center text-white" > 
        <img src={wIcon} /> 온도:{cTemp}  
        {position.desc}</p></div>
       
    </footer>

  );
}

export default Footer;