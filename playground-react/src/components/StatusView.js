import React, {Component} from 'react'

class StatusView extends Component {

    render() {
        let view = null;
        if (this.props.statusViewSelected === "ALARM") {
            view = "Alarm";
        }
        else if (this.props.statusViewSelected === "FAULT") {
            view = "Fault";
        }
        else if (this.props.statusViewSelected === "DISABLE") {
            view = "Disable";
        }

        return (
            <div className="statusView">

                {view}
            </div>
        );
    }
}

export default StatusView;
