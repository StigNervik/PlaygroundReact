import React, {Component} from 'react';
import {Route} from 'react-router-dom'

const ButtonToNavigate = ({ name, selected, onSelected, path, history}) => (
  <button
    className={(selected === path) ? "leftBarButtonSelected" : "leftBarButton" }
    type="button"
    onClick={
        () => {history.push(path);
        onSelected(path);}
    }>
    {name}
  </button>
);


class LeftBarButton extends Component {

  constructor(props) {
  super(props);
  this.state = {
    color: props.initialColor
  };
}

  render() {
    return (

      <Route render={
           (props) => <ButtonToNavigate {...props}
           name={this.props.name}
           selected={this.props.selected}
           onSelected={this.props.onSelected}
           path={this.props.path}/>
       }
       />);
  }
}

export default LeftBarButton;






























/*
const ButtonToNavigate = ({ title, path, viewSelected, onViewSelected, history, img }) => (
  <button
    className={(viewSelected === path) ?  "mainViewButtonsLayoutSelected" : "mainViewButtonsLayout"}
    type="button"
    onClick={
        () => {history.push(path);
        onViewSelected(path);}
    }>
    {title}
  </button>
);
*/

/*
const pushView = withRouter(({history}) => {
    history.push(this.props.path);
})
*/



/*
class LeftBarButton extends Component {

    updateMainView = () => {
        console.log("path: ", this.props.path);
        // this.props.history.push(this.props.path);
        // this.context.history.push(this.props.path);
    }

    render() {

        return (
                <button
                    className={(this.props.selected === this.props.name) ? "leftBarButtonSelected" : "leftBarButton" }
                    type="button"
                    onClick={
                        () => {
                        // history.push(this.props.path);
                        // pushView(this.props.path, this.props.history);
                        history.push(this.props.path);
                        // this.updateMainView();
                        this.props.onSelected(this.props.name);

                    }}
                    >
                    {this.props.name}

                </button>

        )
    }
}

export default LeftBarButton;
*/
