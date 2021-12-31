import { Component } from "react";
import axios from 'axios';

// Page header with logo and tagline
class Head extends Component {
    render() {
        return (
            // <header class="py-5 bg-light border-bottom mb-4">
            //     <div class="container">
            //         <div class="text-center my-5">
            //             <h1 class="fw-bolder">Welcome to Blog Home!</h1>
            //             <p class="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
            //         </div>
            //     </div>
            // </header> 

            <article>
            <h2>Create Content</h2>
            <form action='/create_process' 
                  method='post' onSubmit={function(e) {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    const data = axios({
                      url: 'http://192.168.0.44:8080/login2',
                    });
                    data.then((res) => {
                      console.log( res.data );;
                    });
                  }.bind(this)}>
    
              <p><input type='text' name='title'></input></p>
              <p><textarea name='desc'></textarea></p>
              <p><input type='submit'></input></p>
            </form>
          </article>
        );

    }
}

export { Head };


//자동 슬라이드 배너 (swiper)
//먼저 npm install --save swiper 설치.
// scss 파일을 import할 때 에러가 발생한다면 sass 설치를 해야 한다 > npm install --save sass
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";   // 추가
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

// SwiperCore.use([Navigation, Pagination, Autoplay])   // 추가

// function MainPage() {
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

// export default MainPage;