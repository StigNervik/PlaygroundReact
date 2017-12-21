import React, {Component} from 'react'

class StatusView extends Component {

    render() {
        return (
            <div className="statusView">

                {this.props.statusViewSelected ? "StatusView" : null}                    
            </div>
        );
    }
}

export default StatusView;
