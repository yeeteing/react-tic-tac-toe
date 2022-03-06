import React, { Component } from "react";
import Square from "./Square";

interface IProps {
  squares: string[]
  onClick: Function
  nextMove: string
}

interface IStats {
}

class Board extends React.Component <IProps, any> {
  constructor(props: IProps) {
    super(props);
    console.log("Board " + JSON.stringify(props))
    
  }

  renderSquare(i: number) {
    return <Square 
    value = {this.props.squares[i]} 
    onClick = {()=> this.props.onClick(i)}
    />
  }

  render() {
    const status = `Next player: ${this.props.nextMove}`;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div> <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div> <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> 
        {/* {numbers.map((number, index) => {
          if (number % 3 === 0){
            <div className="board-row">
              {this.renderSquare(index - 2)}
              {this.renderSquare(index - 1)}
              {this.renderSquare(index)}
            </div> 
          }
        }) }*/
        }
      </div>
    );
  }
}
export default Board;
