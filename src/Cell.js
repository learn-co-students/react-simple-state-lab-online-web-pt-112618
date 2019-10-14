import React, { Component } from 'react';

export default class Cell extends Component {
  /*Child*/
  constructor(props){
    super(props)
    this.state = {color: this.props.value}
  }
  /* this must be an arrow function because I'm using this*/
  handleClick = () => {this.setState({color: '#333'})}

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}>
      </div>
    )
  }
}
