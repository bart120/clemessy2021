import './App.css';
import React from 'react';
import Header from './core/components/layout/Header'
import Footer from './core/components/layout/Footer'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div>Welcome</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
