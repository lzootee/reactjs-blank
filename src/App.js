import React, { Component } from 'react';
import './App.css';
import Demo from './demo';
import {Provider} from 'react-redux';
import store from './stores/index';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <header className="app-header">
          boxyz Inc
        </header>
        <div className="container">
          <Provider store = {store}>
            <Demo/>
          </Provider>
        </div>
        <footer>
          (c) boxyz
        </footer>
      </div>
    );
  }
}

export default App;
