import React, { Component } from 'react';
import Cell from './Cell.js'
import {pattern1} from './data.js'

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

const newColor = pattern1.map((row) => row.map((c) => c = '#F00'))

Matrix.defaultProps = {
  values: newColor
}
