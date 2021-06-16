import './App.css';
import React from 'react';
import Header from './core/components/layout/Header'
import Footer from './core/components/layout/Footer'
import { BrowserRouter as BRouter } from 'react-router-dom';
import Routes from './core/router/Routes';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

class App extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <BRouter>
            <Header></Header>
            <div className="main">
              <Routes />
            </div>
            <Footer></Footer>
          </BRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
