
import { component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Main/Footer/footer';
// import Header from './Main/Header/head';
import Nav from './Main/Nav/nav';
import SignUp from './Main/Header/SignUp';
import SignIn from './Main/Header/SignIn';
import Image from './Main/Content/Image';
import Map from './Main/Content/map';
import Content2 from './Main/Content/Content2';
import React from 'react';



function App() {

  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Image />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
      <Content2 />
      <Footer></Footer>

    </div>
  );
}

export default App;