import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Main/Footer/footer';
import Nav from './Main/Nav/nav';
import SignUp from './Main/Header/SignUp';
import SignIn from './Main/Header/SignIn';
// import Header from './Main/Header/Header';
import Image from './Main/Content/Image';
import Map from './Main/Content/map';
import Content2 from './Main/Content/Content2';
import Footer2 from './Main/Footer/footer2';
// import MyPage from './Main/Header/myPage';




function App() {

  return (
    <div className="App">
      <Nav />
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Image />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          {/* <Route path="/MyPage" element={<MyPage />}></Route> */}
        </Routes>
      </BrowserRouter>
     <Content2 />
     <Footer></Footer>
     <Footer2 />
     

    </div>
  )
}

export default App;