import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: ""
        };
    }

    componentDidMount() {
        this.tickTimer = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.tickTimer);
    }

    formatTime(i) {
        if (i < 10) {
            i = "0" + i;
        }

        return i;
    }



    tick() {
        let date = new Date();
        let hours = this.formatTime(date.getHours());
        let minutes = this.formatTime(date.getMinutes());
        let time = hours + ":" + minutes;
        this.setState({time: time})
    }

    render() {
        return (
            <div className="clock">
                <div className="clockText">     {this.state.time}
                </div>
            </div>
        )
    }
}

export default Clock;
