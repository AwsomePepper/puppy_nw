import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Nav } from './Main/Nav/nav';
import { Head } from './Main/Header/head';
import { Content } from './Main/Content/content';
import { Footer } from './Main/Footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Head></Head>
        <BrowserRouter>
          <Routes>
            <Route path="/create" element={<Head/>}></Route>
          </Routes>
        </BrowserRouter>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;