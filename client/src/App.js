import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Nav from './Main/Nav/nav';
import SignUp from './Main/Header/SignUp';
import SignIn from './Main/Header/SignIn';
import BodyImage from './Main/Content/BodyImage';
import Soket from './Main/Content/Soket';
import Banner from './Main/Content/Banner';
import Footer from './Main/Footer/Footer';
import MyPage from './Main/MyPage/MyPage';
import Weather from './Main/Footer/Wheather';




function App() {

  return (
    <div className="App">
      <Nav />
      <Weather/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyImage />}></Route>
          <Route path="/map" element={<Soket />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
     <Banner  />
     <Footer />
     

    </div>
  )
}

export default App;