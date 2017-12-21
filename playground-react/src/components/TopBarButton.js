import React, {Component} from 'react';

class TopBarButton extends Component {

    constructor(props) {
        super(props);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected() {
        console.log("Handle slected", this.props.type);
        this.props.onSelected(this.props.type);
    }

    render() {
        return (
        <div className={(this.props.selected === this.props.type) ?
            "topBarButtonSelected" : "topBarButton"}
            onClick={this.handleSelected}
        >
            <div className={(this.props.selected === this.props.type) ?
                "topBarButtonTextSelected" : "topBarButtonText"}
                >
                {this.props.name}
            </div>
        </div>
        );
    }
}

export default TopBarButton;
