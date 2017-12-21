import React, {Component} from 'react';

class TopBarButton extends Component {

    render() {
        return (
        <div className="topBarButton">
            {this.props.name}
        </div>
        );
    }
}

export default TopBarButton;
