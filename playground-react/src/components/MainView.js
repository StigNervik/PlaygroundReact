import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import SystemView from './SystemView'
import SimulateView from './SimulateView'
import StartView from './StartView'

class MainView extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/SystemView" component={SystemView} />
                    <Route path="/SimulateView" component={SimulateView} />
                    <Route path="/StartView" component={StartView} />
                </Switch>
            </div>
        )
    }
}

export default MainView;
