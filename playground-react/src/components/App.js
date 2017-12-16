import React, { Component } from 'react';
import '../styles/App.css';
import LeftBar from './LeftBar';
import MainView from './MainView';

import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="app">
                <div className="header">header </div>
                <LeftBar/>
                <MainView/>
                <div className="footer">footer </div>
            </div>
        </Router>
    );
  }
}

export default App;
