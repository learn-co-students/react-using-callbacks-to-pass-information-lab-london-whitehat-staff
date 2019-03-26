import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: null
    }
  }

  colorChange = (str) => {
    this.setState({
      selectedColor: str
    })
    console.log(this.state.selectedColor)
  }

  currentColor = () => {
      return this.state.selectedColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell currentColor={this.currentColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector colorChange={this.colorChange}/>
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
