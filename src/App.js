import './App.css';
import React from 'react';
import Header from './core/components/layout/Header'
import Footer from './core/components/layout/Footer'
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/router/Routes';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <div className="main">
            <Routes />
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
