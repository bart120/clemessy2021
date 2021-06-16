import './App.css';
import React from 'react';
import Header from './core/components/layout/Header'
import Footer from './core/components/layout/Footer'
import { BrowserRouter as BRouter } from 'react-router-dom';
import Routes from './core/router/Routes';

class App extends React.Component {

  render() {
    return (
      <div>
        <BRouter>
          <Header></Header>
          <div className="main">
            <Routes />
          </div>
          <Footer></Footer>
        </BRouter>
      </div>
    );
  }
}

export default App;
