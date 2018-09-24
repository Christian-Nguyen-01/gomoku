import React, { Component } from 'react'
import './Square.css'

class Square extends Component {


  handleClick = () => {
    let { board, counter, row, column, countUp } = this.props
    let piece
    if ( board[row][column] !== "" ) return false
      if (counter % 2)
        piece = 'black1'
      else
        piece = 'white1'
    board[row][column] = piece
    countUp(board)
  }


  render() {
    let { board, row, column } = this.props
    return(
      <div className={"square" + ' ' +  board[row][column]} onClick={this.handleClick}><img src = {'/assets/AJ_GoPieces/' + board[row][column] + '.png'} alt = '' style={{userSelect: 'none'}} /></div>
    )
  }
}

export default Square
