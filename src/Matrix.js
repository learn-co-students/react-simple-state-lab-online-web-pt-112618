import React, { Component } from 'react';
import Cell from './cell.js';
import pattern1 from './data.js';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, index) => <Cell key={index} value={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  }) ()
}
