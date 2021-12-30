import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Nav } from './Main/Nav';
import { Head } from './Main/Head';
import { Content } from './Main/Content';
import { Footer } from './Main/Footer';

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
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;
