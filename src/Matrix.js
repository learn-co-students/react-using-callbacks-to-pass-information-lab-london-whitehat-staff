import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super();
    this.state = {
      selectedColor: "#F00"
    }
  }

  changeSelectedColor = (string) => {
    this.setState({
      selectedColor: string
    })
  };

  currentSelectedColor = () => {
    return this.state.selectedColor;
  };

  genRow = (vals) => (
    vals.map((val, idx) => <Cell currentColor={this.currentSelectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log(this.state);
    return (
      <div id="app">
        <ColorSelector colorChange={this.changeSelectedColor} />
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
