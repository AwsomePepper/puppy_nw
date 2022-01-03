import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Content from './Main/Content/content';
import Content2 from './Main/Content/content2';
import Nav from './Main/Content/content2';
import Header from './Main/Content/content2';



class App extends Component {
  render() {
    return (
      <div className = "App">
        <Nav></Nav>
        <Header></Header>
        <Content></Content>
        <Content2></Content2>
      </div>
    )
  }
}

export default App;