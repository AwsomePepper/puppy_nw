import {component} from 'react';

// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";   // 추가
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

// SwiperCore.use([Navigation, Pagination, Autoplay])   // 추가




// const Nav = () => {  //메뉴

//   return (
//     <nav style={{'backgroundColor': '#FFE57F'}} className="navbar navbar-expand-lg navbar-light naver-fixed-top">
//                 <div className="container-fluid">
//                     <a className="navbar-brand " href="/" >멍트워크</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <li className="nav-item"><a className="nav-link" href="#">Map</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//   )
// }


// const Header = () => {  //로그인
//   return (
//     <div className="text-white text-center">
//     <h1>
//       <a href="/signin" className="link-dark">
//         로그인 / 회원가입
//       </a>
//     </h1>
//   </div>
//   )
// }

// const Content = () => { //이미지
//   return (
//     <div className="container mt-5" style={{'alignSelf': 'center'}}>
//       <div className="row">
        
//           <div>
//             <img src="/images/후츄.jpg" height="500" width="600"/>
//           </div>
//         </div>
//       </div>
//   )
// }

// const Content2 = () => { //배너

//   return(
//     <div>
//       <Swiper
//         className="banner"
//         spaceBetween={50}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 1000 }}   // 추가
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }


// const SignUp = () => {
//   return (
//     <div class="container mt-5">
//       <div class="row">
//         <form onSubmit={ (e) => {
//           e.preventDefault();
//           const formData = new FormData();
//           const email = e.target['0'].value;
//           const pwd = e.target['1'].value;
//           const name = e.target['2'].value;
//           formData.append("email", email);
//           formData.append("pwd", pwd);
//           formData.append("name", name);

//           axios({
//             url:'http://127.0.0.1:8080/api/signup',
//             method: 'post',
//             data: formData,
//           }).then((res) => {
//             console.log(res.data);
//             window.locattion = '/';
//           }); //response
//         } }>
//           <div class="mb-3">
//             <label for="email">Email:</label>
//             <input type="text" class="form-control" id="email" name="email"/>
//           </div>
//           <div class="mb-3">
//             <label for="pwd">Password:</label>
//             <input type="password" class="form-control" id="pwd" name="pwd"/>
//           </div>
//           <div class="mb-3">
//             <label for="name">Name:</label>
//             <input type="text" class="form-control" id="name" name="name"/>
//           </div>
//           <div class="d-grid gap-2">
//             <button style={{'backgroundColor': '#2C6BB2'}}  class="btn" id="signup">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// const SignIn = () => {
//   return (
//     <div class="container mt-5">
//     <div class="row">
//         <form onSubmit={(e) => {
//           e.preventDefault(); //form의 기본기능 막기
//           const email = e.target['0'].value;
//           const pwd = e.target['1'].value;
        
//           const formData = new FormData();
//           formData.append("email", email);
//           formData.append("pwd", pwd);

//           axios({
//             url: 'http://localhost:8080/api/signin',
//             method: 'post',
//             data: formData
//           }).then((res) => {
//             console.log(res.data);
//             if(res.data.code ===200) {
//               //로그인 성공
//               alert('로그인 되었습니다');
//               //JWT와 같은 토큰값을 저장
//               //sessionStorage.setItem("token", 1234);
//             } else { //로그인 실패
//               alert('이메일과 비밀번호를 확인해주세요.');
//             }
          
//           })

//         }}>
//             <div class="mb-3 input-group flex-nowrap">
//                 <span class="input-group-text">✉️</span>
//                 <input type="text" class="form-control" name="email" placeholder="email"/>
//             </div>
//             <div class="mb-3 input-group flex-nowrap">
//                 <span class="input-group-text">🔒</span>
//                 <input type="password" class="form-control" name="pwd" placeholder="password"/>
//             </div>
//             <div class="d-grid gap-2">
//                 <button style={{'backgroundColor': '#2C6BB2'}} class="btn" id="signin">Log In</button>
//             </div>
//         </form>
//     </div>
// </div>
//   )
// }

// // // const Footer = () =>{

// // //   componentDidMount() {
// // //     const cityName = 'Seoul';
// // //     const apiKey = '536c9ac88ce061e5682c2733f59941a5';
// // //     const url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey+'';
// // //     //const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+127+'&lon='+37+'&appid='+apiKey+'';


// // //     //axios 라이브러리 이용 
// // //     axios.get(url).then(responseData => {
// // //       console.log(responseData);
// // //       const data = responseData.data;
// // //       this.setState({
// // //         temp: data.main.temp,
// // //         desc: data.weather[0].description,
// // //         icon: data.weather[0].icon,
// // //         loading: false
// // //       });

// // //     }).catch(error=>console.log(error));

// // //   }

// //   //날씨 정보 출력 
// //   render() {
// //     //https://openweathermap.org/weather-conditions 아이콘 정보
// //     const wIcon = 'http://openweathermap.com/img/w/' + this.state.icon + '.png';
// //     const cTemp = (this.state.temp-273.15).toFixed(2);
// //     return (
// //           <footer class="py-5 bg-dark">
// //             <div class="container"><p class="m-0 text-center text-white"> <img src={wIcon}/> 온도:{cTemp}  {this.state.desc}</p></div>
// //          </footer>

  
// //     );
// //     }

// // }





// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Header />
//       <Content />
//       <Content2 />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Content />}></Route>
//           <Route path="/signup" element={<SignUp />}></Route>
//           <Route path="/signin" element={<SignIn />}></Route>
//         </Routes>
//       </BrowserRouter>
//       {/* <Footer></Footer> */}

//     </div>
//   );
// }

// export default App;


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Nav></Nav>
      </div>
    )
  }
}