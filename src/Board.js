import React, { Component } from 'react'
import Square from './Square'
import './Board.css'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
      ],
      counter: 0
    }
  }

  countUp = (board) => {
    this.setState({
      board: board,
      counter: this.state.counter + 1
    })
  }

  reset = () => {
    let board = this.state.board.map(row => {
      return row.map(value => {
        return value.replace(/.+/,'')
      })
    })

    this.setState({
      counter: 0,
      board: board
    })
  }

  render() {
      let board = this.state.board.map((row, rowIndex) => {
        return row.map((column, columnIndex) => {
          return (
            <Square
            key = {rowIndex + ', ' + columnIndex}
            row = { rowIndex }
            column = { columnIndex }
            board = { this.state.board }
            counter = { this.state.counter }
            countUp = { this.countUp }
            />
          )
        })
      })
      return (
        <div className="container">
          <div className="board-inner">
          {board}
          </div>

          <div className="reset" onClick={this.reset}>
          Reset
          </div>
        </div>
    )
  }
}

export default Board
