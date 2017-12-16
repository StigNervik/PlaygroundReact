import React, { Component } from 'react';
import LeftBarButton from './LeftBarButton'

class LeftBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "./StartView"
        }
    }

    handleSelected = (path) => {
        console.log("handle selected: ", path);
        this.setState({selected: path});
    }

    render() {
        return (
            <div className="nav">
                <LeftBarButton name="SYSTEM" selected={this.state.selected} onSelected={this.handleSelected} path="./SystemView"/>
                <div className="padding"/>
                <LeftBarButton name="SIMULATE" selected={this.state.selected} onSelected={this.handleSelected} path="./SimulateView"/>
                <LeftBarButton name="START" selected={this.state.selected} onSelected={this.handleSelected} path="./StartView"/>
            </div>
        )
    }
}

export default LeftBar;
