import { Component } from "react";
import axios  from 'axios';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//https://myanjini.tistory.com/entry/axios%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%82%A0%EC%94%A8-%EC%A0%95%EB%B3%B4-%EC%A1%B0%ED%9A%8C 참고
//날씨 key=536c9ac88ce061e5682c2733f59941a5
//지도에서 위도경도 받아와서 변경필요
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          position: [],
          temp: 0,
           desc: '', 
           icon: '', 
           loading: true }
      }
    
    
  //날씨 정보 조회 API사용
  componentDidMount() {
    const cityName = 'Seoul';
    const apiKey = '536c9ac88ce061e5682c2733f59941a5';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey+'';
    //const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+127+'&lon='+37+'&appid='+apiKey+'';


    //axios 라이브러리 이용 
    axios.get(url).then(responseData => {
      console.log(responseData);
      const data = responseData.data;
      this.setState({
        temp: data.main.temp,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        loading: false
      });

    }).catch(error=>console.log(error));

  }

  //날씨 정보 출력 
  render() {
    //https://openweathermap.org/weather-conditions 아이콘 정보
    const wIcon = 'http://openweathermap.com/img/w/' + this.state.icon + '.png';
    const cTemp = (this.state.temp-273.15).toFixed(2);
    return (
          <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white"> <img src={wIcon}/> 온도:{cTemp}  {this.state.desc}</p></div>
         </footer>

  
    );
    }

}

export { Footer };