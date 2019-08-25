import React, { Component } from 'react';

export default class Cell extends Component {


  //constructor is used here because we must first initialize the state before rendering anything
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }
  

  //define a method that will fire when the user clicks their mouse - it will then update the state
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  

  //finally - render content to the DOM... this component is exported and used within the matrix component
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }

}