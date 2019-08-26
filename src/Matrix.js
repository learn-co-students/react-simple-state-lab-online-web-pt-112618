import React, { Component } from 'react';
import { pattern1 } from './data.js'
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <div className="cell"><Cell value={val} /></div>) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

const color = pattern1.map((co) => co.map((c) => c = '#f00'))

Matrix.defaultProps = {
  values: color
}
