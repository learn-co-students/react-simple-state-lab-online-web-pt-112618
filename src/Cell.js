import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    }
  }

  updateColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div
        className='cell'
        key='color'
        style={{backgroundColor: this.state.color}} onClick={this.updateColor}>
      </div>
    );
  }

}

export default Cell;
