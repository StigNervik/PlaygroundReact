import React, { Component } from 'react';
import '../styles/App.css';
import TopBar from './TopBar';
import StatusView from './StatusView';
import LeftBar from './LeftBar';
import MainView from './MainView';

import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          statusViewSelected: null
      }

      this.handleStatusViewSelected = this.handleStatusViewSelected.bind(this);
  }

  handleStatusViewSelected(selected) {
      this.setState({statusViewSelected: selected});
  }

  render() {
    return (
        <Router>
            <div className="app">
                <TopBar onHandleStatusViewSelected = {this.handleStatusViewSelected}/>
                <StatusView statusViewSelected={this.state.statusViewSelected}/>
                <LeftBar/>
                <MainView/>
                <div className="footer">footer </div>
            </div>
        </Router>
    );
  }
}

export default App;
