import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: "#FFF"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentlySelectedColor={this.currentlySelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  onSelectColor = (hex) => {
    this.setState({selectedColor: hex})
  }

  currentlySelectedColor = () => {
     return this.state.selectedColor
  }

  render() {
    console.log(this.state)
    return (
      <div id="app">
        <ColorSelector onSelectColor={this.onSelectColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
