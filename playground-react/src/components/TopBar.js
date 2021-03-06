import React, { Component } from 'react';
import Clock from './Clock';
import TopBarButton from './TopBarButton';

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }

        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(selected) {


        if (selected === this.state.selected) {
            console.log("UnSelected: ", selected);
            this.setState({selected: null});
            this.props.onHandleStatusViewSelected(null);
        }
        else {
            console.log("Selected: ", selected);
            this.setState({selected: selected});
            this.props.onHandleStatusViewSelected(selected);
        }

    }

    render() {
        return (
            <div className="header">
                <Clock/>
                <TopBarButton name="ALARM"
                              type="ALARM"
                              selected={this.state.selected}
                              onSelected={this.handleSelected}/>
                <TopBarButton name="FAULT"
                              type="FAULT"
                              selected={this.state.selected}
                              onSelected={this.handleSelected}/>
                <TopBarButton name="DISABLE"
                              type="DISABLE"
                              selected={this.state.selected}
                              onSelected={this.handleSelected}/>
            </div>
        )
    }
}

export default TopBar;
