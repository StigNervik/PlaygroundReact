import React, { Component } from 'react';
import Clock from './Clock';
import TopBarButton from './TopBarButton';

class TopBar extends Component {

    render() {
        return (
            <div className="header">
                <Clock/>
                <TopBarButton name="ALARM"/>
                <TopBarButton name="FAULT"/>
                <TopBarButton name="DISABLE"/>
            </div>
        )
    }
}

export default TopBar;
