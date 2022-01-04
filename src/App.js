
import { component, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import  Footer  from './Main/Footer/footer';
// import Header from './Main/Header/head';
import Nav from './Main/Nav/nav';
import { Content } from './Main/Content/content'; 
import SignUp from './Main/Header/SignUp';
import SignIn from './Main/Header/SignIn';
import Image from './Main/Content/Image';


// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";   // 추가
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// SwiperCore.use([Navigation, Pagination, Autoplay])   // 추가







// const Content2 = () => { //배너

//   return (
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




function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Nav />
      {/* <Header /> */}
      <Image />
      {/*{ show && <Image /> }*/}
    {/* <Content />
      {/* <Content2 /> */}
      <BrowserRouter>
        <Routes>
          
          <Route path="/map" element={<Content />}></Route>
          <Route path="/signup" element={ <SignUp />}></Route>
            
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;