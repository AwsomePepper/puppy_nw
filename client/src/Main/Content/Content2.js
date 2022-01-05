import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon2 from './신규회원 배너.png';
import icon3 from './사료 배너 .png';
import icon4 from './산책 배너.png';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/footer';



const Content2 = () => { //슬라이드 배너 

    return (
     
      <div style={{ display: 'block', width: '100%','margin-top':'100px'
     }}> 
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {icon2}
            alt="First slide"
            />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {icon3}
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {icon4}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
  
    </div>
  
    )
  }

  export default Content2;



  //script오류 = npm install, bootstrap 오류 = npm install bootstrap